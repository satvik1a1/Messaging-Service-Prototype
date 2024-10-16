// import { FC } from 'react'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

// interface loadingProps {}

// const loading: FC<loadingProps> = ({}) => {
//   return (
//     <div className='w-full flex flex-col gap-3'>
//       <Skeleton className='mb-4' height={60} width={500} />
//       <Skeleton height={20} width={150} />
//       <Skeleton height={50} width={400} />
//     </div>
//   )
// }

// export default loading


import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className='flex h-screen'>
      {/* Left side: Skeleton for text and form */}
      <div className='flex-1 flex flex-col gap-3 pt-8'>
        <Skeleton className='mb-4' height={60} width={500} />
        <Skeleton height={20} width={150} />
        <Skeleton height={50} width={400} />
      </div>

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

export default loading
