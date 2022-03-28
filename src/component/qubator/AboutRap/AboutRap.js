import React from 'react'
import './style.css'
const AboutRap = () => {
  return (
    <div class="p-6 mx-auto mt-dtop sm:mt-bckwidth w-full rounded-xl flex-wrap  flex  justify-center space-x-4">

  <div>
    <div class="text-SM font-medium text-left sm:ml-5 text-gid-col text-black">ABOUT US</div>
    <p class="font-medium text-left sm:text-2xl sm:ml-5 text-black text-3xl">Rhapsody of Realities is  <br/>no  ordinary book</p>
          </div>
          <div className = 'text-left'>

              <div  className = 'mainT' >Rhapsody of Realities is no ordinary book: It’s a classic love-note from God to you, with the message of life! Oftentimes, referred to as the “Messenger Angel,” the devotional is a life guide designed to enhance your spiritual growth and development by bringing you a fresh perspective<br/><br/> from God’s Word every day. With features like the day’s topic, a theme scripture, the day’s message, the daily confession and the Bible reading plan segment, it brings the richness of God’s Word into the lives of millions on a daily basis.</div>
           <button style = {{width : '150px', height : '50px'}} class="rounded-full ml-5 text-white  bg-but-col mt-3">Read More</button>
          </div>
</div>
  )
}

export default AboutRap