import React from 'react'
import pic from '../Vid/ch2.webp'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";
const CountDown = () => {
  const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

  
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
  };
  
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

  const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div style = {{color : '#dccc7b'}}>{dimension}</div>
    </div>
  );
};


    return (
        <div className="relative flex items-center text-t-col flex-col bg-black justify-center h-96 mb-12 overflow-hidden">
           
         <div
    class="relative text-t-com font-bold z-30 p-5 text-2xl   bg-opacity-50 rounded-xl"
  >
      Join the Campaign to reach the world for Jesus.
        </div> 
         <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors="#8661ef"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#8661e3"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#8661e3"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
          <CountdownCircleTimer
        
        {...timerProps}
        colors="#8661e3"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
    <div class=" z-30 rounded-md shadow mt-1">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-black  bg-but-col  hover:bg-t-com hover:bg-white md:py-2 md:text-sm md:px-5"> Start From Here </a>
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