'use client'
import CollaborativeRoom from '@/components/CollaborativeRoom'
import Header from '@/components/Header'
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import { SignUpButton } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('@/components/editor/Editor'),
  { ssr: false }
)

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
        <CollaborativeRoom/>
    </main>
  )
}

export default Document
