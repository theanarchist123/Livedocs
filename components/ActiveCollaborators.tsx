'use client';

import React from 'react';
import { useOthers, useSelf } from '@liveblocks/react';
import Image from 'next/image';

const ActiveCollaborators = () => {
  const others = useOthers();
  const currentUser = useSelf();

  const hasOthers = others.length > 0;
  const collaborators = others.map((other) => other.info);

  return (
    <div className="flex items-center justify-center gap-1">
      <ul className="collaborators-list flex -space-x-2">
        {collaborators.map(({id, name, avatar, color}) => (
          <li key={id} className="relative">
            <Image
              src={avatar}
              alt={name}
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
              style={{ borderColor: color }}
            />
          </li>
        ))}
      </ul>
      {hasOthers && (
        <p className="text-sm text-gray-500">
          {others.length} other{others.length === 1 ? "" : "s"}
        </p>
      )}
    </div>
  );
};

export default ActiveCollaborators;