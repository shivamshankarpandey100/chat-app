import React from 'react'

const Conversation = ({conversation,lastIdx,emoji}) => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>

          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-200'>{conversation.fullName}</p>
              <span className='text-xl'>{emoji}</span>
            </div>
          </div>

    </div>
    {/* <div className='divider my-0 py-0 h-1'/> */}
    {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation;




// //started code for this file

// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//                 <img src="avtar url here" alt="user avatar" />
//             </div>
//         </div>

//           <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-200'>jhon doe</p>
//               <span className='text-xl'>🦘</span>
//             </div>
//           </div>

//     </div>
//     <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }

// export default Conversation