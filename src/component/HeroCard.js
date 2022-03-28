import React from 'react'
import "./style.css"

export const HeroCard = () => {
  return (
    <div className="cardAll">
      <div className="MainHold">  
        <div className="card1">
          <div className="a1">
            <div className="icon"><ion-icon name="people-outline" size="large"></ion-icon></div>
            <div className="text">
                  <div className = 'text-but-col' style={{ fontWeight:"300",fontSize:"15px"}}>Rhapsody Impacts</div>
              <div style={{ fontWeight:"500",fontSize:"25px"}}>Giving </div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
            <div class=" z-30 rounded-md shadow flex justify-end   ">
              <a href="#" class="w-30 h-11 flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-t-com border border-but-col    hover:bg-t-com hover:bg-white hover:text-black md:py-2 md:text-sm md:px-5"> TAKE ACTION </a>
            </div>
        </div>

        <div className="card1">
          <div className="a1">
            <div className="icon"><ion-icon name="globe-outline" size="large"></ion-icon></div>
            <div className="text">
                  <div className = 'text-but-col' style={{ fontWeight:"300",fontSize:"15px"}}>Rhapsody Impacts</div>
              <div style={{ fontWeight:"500",fontSize:"25px"}}>Global Impact</div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
          <div class=" z-30 rounded-md shadow flex justify-end   ">
              <a href="#" class="w-30 h-11 flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-t-com border border-but-col    hover:bg-t-com hover:bg-white hover:text-black md:py-2 md:text-sm md:px-5"> TAKE ACTION </a>
            </div>
        </div>

        <div className="card1">
          <div className="a1">
            <div className="icon"><ion-icon name="contrast-outline" size="large"></ion-icon></div>
            <div className="text">
              <div className = 'text-but-col' style={{ fontWeight:"300",fontSize:"15px"}}>Rhapsody Impacts</div>
              <div  style={{ fontWeight:"500",fontSize:"25px"}}>Networking</div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
          <div class=" z-30 rounded-md shadow flex justify-end   ">
              <a href="#" class="w-30 h-11 flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-t-com border border-but-col    hover:bg-t-com hover:bg-white hover:text-black md:py-2 md:text-sm md:px-5"> TAKE ACTION </a>
            </div>
        </div>
       
      </div>
    </div>
  )
}
