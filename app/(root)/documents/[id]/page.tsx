import CollaborativeRoom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { getUserColor, getAccessType } from "@/lib/utils";

type UserType = 'editor' | 'viewer';
type AccessType = 'room:write' | 'room:read' | 'room:presence:write';

interface RoomMetadata {
  creatorId: string;
  email: string;
  title: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color?: string;
}

interface CollaborativeRoomProps {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: CollaboratorUser[];
  currentUserType: UserType;
}

interface CollaboratorUser extends User {
  userType: UserType;
}

interface SearchParamProps {
  params: {
    id: string;
  };
}

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if(!room) redirect('/');

  const userIds = Object.keys(room.usersAccesses);
  const users = (await getClerkUsers({ userIds })) || [];

  const usersData = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    color: getUserColor(user.id),
    userType: Array.isArray(room.usersAccesses[user?.email]) && 
      room.usersAccesses[user?.email].some(access => getAccessType('editor').includes(access))
        ? ('editor' as const)
        : ('viewer' as const)
  }));

  const currentUserType = Array.isArray(room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]) && 
    room.usersAccesses[clerkUser.emailAddresses[0].emailAddress].some(access => getAccessType('editor').includes(access))
      ? ('editor' as const)
      : ('viewer' as const);

  const metadata = {
    creatorId: String(room.metadata.creatorId),
    email: String(room.metadata.email),
    title: String(room.metadata.title)
  };

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom 
        roomId={id}
        roomMetadata={metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  )
}

export default Document