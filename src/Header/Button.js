import React from 'react'

function Button(props) {
 return (
    <button className='bg-but-col text-dwhite font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
