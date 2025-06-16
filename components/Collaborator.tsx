import Image from 'next/image';
import React, { useState } from 'react'
import UserTypeSelector from '@/components/UserTypeSelector';
import { Button } from './ui/button';
import { removeCollaborator, updateDocumentAccess } from '@/lib/actions/room.actions';

const Collaborator = ({ roomId, creatorId, collaborator, email, user }: CollaboratorProps) => {
  const [userType, setUserType] = useState(collaborator.userType || 'viewer');
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const shareDocumentHandler = async (type: string) => {
    setLoading(true);
    await updateDocumentAccess({ 
      roomId, 
      email, 
      userType: type as UserType, 
      updatedBy: user 
    });
    setLoading(false);
  }

  const removeCollaboratorHandler = async (email: string) => {
    setLoading(true);
    await removeCollaborator({ roomId, email });
    setLoading(false);
  }

  // Generate initials from name or email
  const getInitials = () => {
    if (collaborator.name) {
      return collaborator.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return collaborator.email.slice(0, 2).toUpperCase();
  };

  return (
    <li className="flex items-center justify-between gap-2 py-3">
      <div className="flex gap-2">
        {imageError ? (
          <div 
            className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-sm font-semibold text-white"
          >
            {getInitials()}
          </div>
        ) : (
          <div className="relative size-9">
            <Image 
              src={collaborator.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${collaborator.email}&backgroundColor=2563eb`}
              alt={collaborator.name || 'User avatar'}
              fill
              className="rounded-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        <div>
          <p className="line-clamp-1 text-sm font-semibold leading-4 text-white">
            {collaborator.name || collaborator.email.split('@')[0]}
            <span className="text-10-regular pl-2 text-blue-100">
              {loading && 'updating...'}
            </span>
          </p>
          <p className="text-sm font-light text-blue-100">
            {collaborator.email}
          </p>
        </div>
      </div>

      {creatorId === collaborator.id ? (
        <p className="text-sm text-blue-100">Owner</p>
      ) : (
        <div className="flex items-center gap-2">
          <UserTypeSelector 
            userType={userType as UserType}
            setUserType={setUserType}
            onClickHandler={shareDocumentHandler}
          />
          <Button 
            type="button" 
            onClick={() => removeCollaboratorHandler(collaborator.email)}
            className="bg-red-500 hover:bg-red-600"
          >
            Remove
          </Button>
        </div>
      )}
    </li>
  );
}

export default Collaborator;