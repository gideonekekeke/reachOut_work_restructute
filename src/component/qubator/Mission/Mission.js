import React from 'react'
import './style.css'
import pic from './img/1.jpg'
const Mission = () => {
    return (
          <div class="p-6 mx-auto  w-full rounded-xl flex-wrap  flex  justify-center space-x-4">

  <div>
    <div class="text-SM font-medium text-left text-gid-col text-black">Rhapsody of Reality</div>
                <p class="font-medium text-left text-black text-3xl w-96">To spread the Gospel to the whole world.</p>
                <br/>
              <div  className = 'text-left mt-5'><div className = 'flex'><div className = 'iconHo'> <ion-icon name="book-outline"></ion-icon></div> <div className ='flex flex-col ml-5'><h1 className = 'font-bold '>Our Mission</h1>  <div style = {{color : "#886866"}}  className = 'w-96 mt-2 '>Rhapsody of Realities isn't your typical novel: It's a classic love letter from God to you, complete with a life message!</div><div className = 'text-gid-col'>Read More</div></div></div></div>
              <div className = 'text-left mt-5'><div className = 'flex'><div className = 'iconHo'> <ion-icon name="book-outline"></ion-icon></div> <div className ='flex flex-col ml-5'><h1 className = 'font-bold '>Join Translators Network</h1>  <div style = {{color : "#886866"}}  className = 'w-96 mt-2'>The Translators' Network is a group of translators who are dedicated to making this book available and understandable to everyone</div><div className = 'text-gid-col'>Join Now!</div></div></div></div>
              <div className = 'text-left mt-5'><div className = 'flex'><div className = 'iconHo'> <ion-icon name="book-outline"></ion-icon></div> <div className ='flex flex-col ml-5'><h1 className = 'font-bold '>Download Free Rhapsody</h1>  <div  style = {{color : "#886866"}}  className = 'w-96 mt-2'>Rhapsody of Realities is a daily devotional that gives you a new perspective on God's Word. Get A Free Copy Now!</div><div className = 'text-gid-col'>Download Now!</div></div></div></div>
          </div>
          <div className = 'text-left'>

              <div   className = 'comp' >
                    <img style = {{height : '100%', width : '100%', objectFit : 'cover', borderRadius : '10px'}} src={ pic}/>
              </div>
          </div>
</div>
    )
}

export default Mission