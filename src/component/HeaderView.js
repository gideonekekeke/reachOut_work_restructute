import React from 'react'

const HeaderView = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-12"} sticky top-0  h-screen bg-black relative text-white transition-all transition-duration: 300ms`}>
        <div className='mt-20 text-3xl'><ion-icon name="logo-stackoverflow"></ion-icon></div>
        {
          open ?
        <div className='mt-4 flex justify-center align-center flex-col' >
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon><div className = 'ml-2'>Dashboard</div></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon><div className = 'ml-2'>Map Location</div></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon><div className = 'ml-2'>Products</div></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon><div className = 'ml-2'>Stats</div></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon><div className = 'ml-2'>Customers</div></div>

        </div> :   
        <div className='mt-4 flex justify-center align-center flex-col' >
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon></div>
          <div className = ' hover:bg-sky-700 p-3  transition-all cursor-pointer transition-duration: 300ms text-1xl flex justify-center items-center'> <ion-icon  name="speedometer-outline"></ion-icon></div>
        </div>
    }

      </div>
      <button onClick={handleOpen} className='top-9 absolute bg-white rounded-full'>Toggle</button>
      <div className='bg-black h-12 w-full sticky top-0 flex'>


        <h1>Home</h1>
      </div>

    </div>
  )
}

export default HeaderView