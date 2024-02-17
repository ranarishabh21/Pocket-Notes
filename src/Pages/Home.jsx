import React from 'react'
import homeImg from "../assets/homeImg.png"
import lock from "../assets/lock.png"

function Home() {
  return (
    <>

<div className='home'>
      <img src={homeImg} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="home_bottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default Home