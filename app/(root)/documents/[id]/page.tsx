import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Document = async ({ params }: PageProps) => {
  const { id } = await params;
  const clerkUser = await currentUser();
  
  if(!clerkUser) {
    redirect('/sign-in');
  }

  const userEmail = clerkUser.emailAddresses[0].emailAddress;
  const room = await getDocument({
    roomId: id, 
    userId: userEmail,
  });

  if(!room) redirect('/');

  // Ensure room metadata matches the required type
  const roomMetadata: RoomMetadata = {
    creatorId: String(room.metadata.creatorId),
    email: String(room.metadata.email),
    title: String(room.metadata.title)
  };

  // Determine user type based on room metadata and access
  const isCreator = roomMetadata.creatorId === clerkUser.id;
  const currentUserType: UserType = isCreator ? "creator" : "editor";
  
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={roomMetadata}
        users={[]}  // This will be handled by Liveblocks presence
        currentUserType={currentUserType}
      />
    </main>
  )
}

export default Document
