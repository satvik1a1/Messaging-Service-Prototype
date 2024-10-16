// import AddFriendButton from '@/components/AddFriendButton'
// import { FC } from 'react'

// const page: FC = () => {
//   return (
//     <main className='pt-8'>
//       <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
//       <AddFriendButton />
//     </main>
//   )
// }

// export default page

import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'

const page: FC = () => {
  return (
    <div className='flex h-screen'>
      {/* Left side: Text and form */}
      <main className='flex-1 pt-8'>
        <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
        <AddFriendButton />
      </main>

      {/* Right side: Background image */}
      <div
        className='hidden md:flex flex-1 bg-no-repeat bg-cover bg-center '
        style={{
          backgroundImage: `url('https://pic.onlinewebfonts.com/thumbnails/animations_245248.svg?width=2')`, // Replace with actual path
        }}
      ></div>
    </div>
  )
}

export default page
