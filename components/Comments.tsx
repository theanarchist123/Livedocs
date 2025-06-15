import { cn } from '@/lib/utils';
import { useIsThreadActive } from '@liveblocks/react-lexical';
import { Composer, Thread } from '@liveblocks/react-ui';
import { useThreads, useSelf } from '@liveblocks/react/suspense';
import type { ThreadData } from '@liveblocks/client';
import React from 'react'

interface ThreadWrapperProps {
  thread: ThreadData;
}

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  const isActive = useIsThreadActive(thread.id);
  const self = useSelf();

  return (
    <Thread 
      thread={thread}
      data-state={isActive ? 'active' : null}
      className={cn('comment-thread border', 
        isActive && '!border-blue-500 shadow-md',
        thread.resolved && 'opacity-40'
      )}
      indentCommentContent={false}
      style={{ zIndex: isActive ? 1 : 0 }}
    />
  )
}

const Comments = () => {
  const { threads } = useThreads();
  const self = useSelf();

  return (
    <div className="comments-container">
      <Composer 
        className="comment-composer"
        onComposerSubmit={(comment) => {
          // The user info is automatically added by Liveblocks
          // based on the auth configuration
        }}
      />

      {threads.map((thread) => (
        <ThreadWrapper key={thread.id} thread={thread} />
      ))}
    </div>
  )
}

export default Comments