import FriendRequests from '@/components/FriendRequests'
import { fetchRedis } from '@/helpers/redis'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { FC } from 'react'

const page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) notFound()

  // ids of people who sent current logged in user a friend request
  const incomingSenderIds = (await fetchRedis(
    'smembers',
    `user:${session.user.id}:incoming_friend_requests`
  )) as string[]

  const incomingFriendRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = (await fetchRedis('get', `user:${senderId}`)) as string
      const senderParsed = JSON.parse(sender) as User

      return {
        senderId,
        senderEmail: senderParsed.email,
      }
    })
  )

  return (
    <div className='flex h-screen'>
      {/* Left side: Text and FriendRequests */}
      <main className='flex-1 pt-8'>
        <h1 className='font-bold text-5xl mb-8'>Friend Requests</h1>
        <div className='flex flex-col gap-4'>
          <FriendRequests
            incomingFriendRequests={incomingFriendRequests}
            sessionId={session.user.id}
          />
        </div>
      </main>

      {/* Right side: Background image */}
      <div
        className='hidden md:flex flex-1 bg-no-repeat bg-cover bg-center'
        style={{
          backgroundImage: `url('https://pic.onlinewebfonts.com/thumbnails/animations_245248.svg?width=2')`, // Replace with actual path
        }}
      ></div>
    </div>
  )
}

export default page
