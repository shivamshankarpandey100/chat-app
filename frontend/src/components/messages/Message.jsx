import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' 
            src="https://www.rawpixel.com/image/2023799/young-man-red-tee-character-png#eyJrZXlzIjoiYXZhdGFyIiwic29ydGVkS2V5cyI6ImF2YXRhciJ9" 
            />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>hi! whats upp</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message;