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
              <div style={{ fontWeight:"300",fontSize:"15px"}}>Build</div>
              <div style={{ fontWeight:"500",fontSize:"25px"}}>Qlifield  Team</div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
        </div>

        <div className="card1">
          <div className="a1">
            <div className="icon"><ion-icon name="globe-outline" size="large"></ion-icon></div>
            <div className="text">
              <div style={{ fontWeight:"300",fontSize:"15px"}}>Build</div>
              <div style={{ fontWeight:"500",fontSize:"25px"}}>Global Impact</div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
        </div>

        <div className="card1">
          <div className="a1">
            <div className="icon"><ion-icon name="contrast-outline" size="large"></ion-icon></div>
            <div className="text">
              <div style={{ fontWeight:"300",fontSize:"15px"}}>Build</div>
              <div style={{ fontWeight:"500",fontSize:"25px"}}>Networking</div>
            </div>
          </div>
          <div className="a2">
            To spread the Gospel to the whole world using Rhapsody of Realities.
          </div>
        </div>
       
      </div>
    </div>
  )
}
