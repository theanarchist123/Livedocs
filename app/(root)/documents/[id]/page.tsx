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

const Document = async ({ params }: SearchParamProps) => {
  try {
    const id = params.id;
    const clerkUser = await currentUser();
    if(!clerkUser) redirect('/sign-in');

    const room = await getDocument({
      roomId: id,
      userId: clerkUser.emailAddresses[0].emailAddress,
    });

    if(!room) redirect('/');

    // Get emails from room accesses instead of IDs
    const userEmails = Object.keys(room.usersAccesses);
    const users = await getClerkUsers({ userIds: userEmails });

    if (!users || !Array.isArray(users)) {
      return (
        <div className="flex h-screen items-center justify-center">
          <p>Error loading document users</p>
        </div>
      );
    }

    const usersData = users.map((user) => ({
      id: user?.id || '',
      name: user?.name || 'Unknown User',
      email: user?.email || '',
      avatar: user?.avatar || '',
      color: getUserColor(user?.id || ''),
      userType: Array.isArray(room.usersAccesses[user?.email || '']) && 
        room.usersAccesses[user?.email || ''].some(access => getAccessType('editor').includes(access))
          ? ('editor' as const)
          : ('viewer' as const)
    })).filter(user => user.email); // Filter out any invalid users

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
  } catch (error) {
    console.error("Error loading document:", error);
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Error loading document</p>
      </div>
    );
  }
}

export default Document