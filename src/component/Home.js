import React from 'react'
import img  from "../Header/1.png"
import pix from "./3.jpg"
import Button from "../Header/Button"


function Home() {
  return (
    <div>
      <br/>
     
    
    <div className='h-112 w-full  justify-evenly flex-wrap  flex'>
      <div className='h-112  w-box leading-2 p-2'>
        <div className='text-ttext font-bold text-2xl'>Our Mission</div>
        <div>
         
          <span>To spread the Gospel to the whole world using Rhapsody of Realities.</span>
          <br/>
           <br/>
         
          <span>Rhapsody of Realities isn't your typical novel: It's a classic love letter from God to you, complete with a life message! The devotional is a life guide designed to boost your spiritual growth and development by providing you a fresh perspective from God's Word every day. It is often referred to as the "Messenger Angel", which we propagate via our ReachOut Campaigns</span>
           <br/>
           <br/>
          <span>
            ReachOut Campaigns are the world's largest Gospel carnivals, during which partners lavishly celebrate God's Word by distributing Rhapsody of Realities in various countries across the world.
          </span>
           <br/>
           <br/>
          <span>
            With the free distribution of Rhapsody of Realities and relief materials, our "Messenger Angel" - Rhapsody of Realities, reaches out to the needy and less privileged, penetrating into the hearts of men with the gospel, bringing hope, joy, succor, love, and salvation to their souls. These relief materials are distributed via the ReachOut Campaigns Foundation.
          </span>
        </div>
        <br/>
        <div className='  w-full  justify-evenly flex-wrap  flex'>
          <div className='bg-eds-color  text-dwhite font-[Poppins]  w-46 cursor-pointer   duration-500  py-2 px-6 rounded  hover:bg-indigo-400 '>
            About Rhapsody
          </div>
          <div className='bg-eds-color  text-dwhite font-[Poppins]  w-46 cursor-pointer   duration-500  py-2 px-6 rounded  hover:bg-indigo-400 '>
            About Rhapsody
          </div>
          <div className='bg-eds-color text-dwhite font-[Poppins]  w-46 cursor-pointer   duration-500  py-2 px-6 rounded  hover:bg-indigo-400 '>
            About Rhapsody
          </div>


        </div>

      </div>
      <div className='h-112 w-box items-center flex justify-center alignCenter'>
        <div className='rounded-2xl h-dheight p-2 rounded-lg  '>
           <img src={pix} className='w-edwdith h-edheight object-cover rounded-lg'/>
        </div>
       
      </div>

    </div>
    </div>
  )
}

export default Home
