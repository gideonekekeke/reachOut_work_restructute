import React from 'react'
import pic from '../Vid/ch2.webp'
const CountDown = () => {

    return (
        <div className="relative flex items-center text-t-col flex-col bg-black justify-center h-96 mb-12 overflow-hidden">
           
         <div
    class="relative text-t-com font-bold z-30 p-5 text-2xl   bg-opacity-50 rounded-xl"
  >
      Join the Campaign to reach the world for Jesus.
            </div>   
             <div className='text-t-com flex text-2xl' > <div className='font-bold relative z-30 m-5'>280    : <div className = 'font-light'> Days</div></div> <div className='font-bold relative z-30 m-5' >280 : <div className = 'font-light'> Hours</div></div> <div className='font-bold relative z-30 m-5'>280 : <div className = 'font-light'> Minutes</div></div> <div className='font-bold relative z-30 m-5'>280  <div className = 'font-light'> Seconds</div></div></div>
    <div class=" z-30 rounded-md shadow mt-1">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-black  bg-t-com  hover:bg-t-com hover:bg-white md:py-2 md:text-sm md:px-5"> Start From Here </a>
            </div>          
  <img

              alt = ''
             src = {pic}
                className="absolute  
                  opacity-40
                z-10 w-auto min-w-full min-h-full max-w-none"
            />
            
 </div>
    )
}
export default CountDown