import React from 'react'

import pic1 from '../Vid/rne.webp'
import pic2 from '../Vid/ror_allnation.jfif'
import pic3 from '../Vid/ror4.jpeg'
import pic4 from '../Vid/rorusa.jpeg'
import pic5 from '../Vid/rhapsody_1.jpeg'
import pic6 from '../Vid/children.jpeg'
import pic7 from '../Vid/Rhapsody_10.jpeg'
const CardProps = () => {

  const data = [
    {
      title: 'A UNIQUE OPPORTUNITY TO EARN',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic1,
      bck : 'Opportunity to Earn '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic2,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic3,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic4,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic5,
      bck : 'Rhapsody of Reality '
  
    },
    
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic6,
      bck : 'Rhapsody of Reality '
  
    },
    {
      title: 'RHAPSODY OF REALITIES IN EVERY FORMAT',
      desc: 'Rhapsody is available in over 4000 languages.join us to reach and penetrate the remaining 2.139 languages yet to be acquired.join us today!',
      img1: pic7,
      bck : 'Rhapsody of Reality '
  
    },
    

  ]




  return (
    <div className = 'flex justify-center items-center flex-col'>
      <div className = 'font-bold  text-but-col text-2xl'>Impact & Initiatives</div>
      <p>Rhapsody Impacts</p>
      <br/>
      
      <div className=' w-full flex justify-center w-11/12 items-center  flex-wrap pb-10'>
    
          
      {
        data.map((props) => (
                <div className='h-cardHeight w-cardWidth m-3 shadow-xl bg-dwhite'>
                    <div className='w-full h-inside bg-m-col'>
                      <img src={props.img1}  className='w-edwdith h-edheight object-cover'/>
                    </div>
                    <div className='font-semibold mt-2 leading-6'>{props.title}</div>
                    <div className=''>{props.desc}</div>
 
                 </div>
        ))
     }
    </div>
    
    </div>
  )
}

export default CardProps