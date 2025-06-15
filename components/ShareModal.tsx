'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useSelf } from '@liveblocks/react/suspense';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import UserTypeSelector from "@/components/UserTypeSelector";
import Collaborator from "@/components/Collaborator";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const ShareModal = ({ roomId, collaborators, creatorId, currentUserType }: ShareDocumentDialogProps) => {
  const user = useSelf();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<UserType>('viewer');

  const shareDocumentHandler = async () => {
    setLoading(true);
    await updateDocumentAccess({ 
      roomId, 
      email, 
      userType: userType as UserType, 
      updatedBy: user.info,
    });
    setLoading(false);
  }

  // If user is a viewer, don't render the share button at all
  if (currentUserType === 'viewer') {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div 
          role="button"
          tabIndex={0}
          className="gradient-blue flex h-9 cursor-pointer items-center gap-1 rounded-md px-4 text-white transition-all hover:opacity-80"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setOpen(true);
            }
          }}
        >
          <Image
            src="/assets/icons/share.svg"
            alt="share"
            width={20}
            height={20}
            className="min-w-4 md:size-5"
          />
          <span className="mr-1 hidden sm:block">
            Share
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>Manage who can view this project</DialogTitle>
          <DialogDescription>Select which users can view and edit this document</DialogDescription>
        </DialogHeader>

        <Label htmlFor="email" className="mt-6 text-blue-100">
          Email address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-md bg-dark-400">
            <Input 
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="share-input"
            />
            <UserTypeSelector 
              userType={userType}
              setUserType={setUserType}
            />
          </div>
          <Button 
            type="submit" 
            onClick={shareDocumentHandler} 
            className="gradient-blue flex h-full gap-1 px-5" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Invite'}
          </Button>
        </div>

        <div className="my-2 space-y-2">
          <ul className="flex flex-col">
            {collaborators.map((collaborator) => (
              <Collaborator 
                key={collaborator.id}
                roomId={roomId}
                creatorId={creatorId}
                email={collaborator.email}
                collaborator={collaborator}
                user={user.info}
              />
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShareModal;