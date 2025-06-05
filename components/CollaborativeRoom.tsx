'use client'
import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React from 'react'
import Editor from './editor/Editor'
import Header from './Header'
import ActiveCollaborators from './ActiveCollaborators'

interface CollaborativeRoomProps {
  roomId: string;
  roomMetadata: {
    title: string;
  };
  users: Array<{
    id: string;
    name: string;
    avatar: string;
    color: string;
  }>;
  currentUserType: 'viewer' | 'editor';
}

const Room = ({
  roomId,
  roomMetadata,
  users,
  currentUserType
}: CollaborativeRoomProps) => {
  return (
    <div className="collaborative-room">
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">{roomMetadata.title}</p>
        </div>
        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
          <ActiveCollaborators />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

const CollaborativeRoom = (props: CollaborativeRoomProps) => {
  return (
    <RoomProvider
      id={props.roomId}
      initialPresence={{
        cursor: null,
        selection: null,
        isTyping: false,
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room {...props} />}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
