import React, { useState, useEffect } from 'react';
import './App.css';
import video from './assets/newPizzaBG.mp4'
import mainLogo from './assets/mainLogo.png'
import IntroBox from './components/IntroBox';
import Mask from './components/Mask';


function App() {
  const [windowSize, setWindowSize] = useState()
  const [mask, setMask] = useState('')
  const [logoFlash, setLogoFlash] = useState('')
  const [logoHide, setLogoHide] = useState('logoOut')

  const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
    setWindowSize(getWindowSize());
  }, [])

  const logoFlasher = (flashing, count) => {
    setLogoHide('')
    let logocount = count;
    let isFlashing = flashing
    

    if (count > 3) {
      setLogoFlash('logoFlashLittle')
      setTimeout(() => {
        setLogoFlash('logoFlashOut')
      }, 500);
      setTimeout(() => {
        setLogoFlash('')
      }, 1000);
      return;
    }

    
    setTimeout(() => {
    
    logocount++
      if(isFlashing === 'logoFlashBig') { 
        setLogoFlash('logoFlashLittle')
        isFlashing = 'logoFlashLittle';
      } else {
        setLogoFlash('logoFlashBig')
        isFlashing = 'logoFlashBig'
      }
      logoFlasher(isFlashing, logocount)
    }, 700);
  }



  return (
    <div className="App relative flex flex-col h-screen items-center justify-evenly">
      <Mask mask={mask} />
     
      <img id="logo" src={mainLogo} className={`z-30 md:w-3/4 lg:w-1/2 relative md:right-8 linear ${logoHide} ${logoFlash}`} />
      <h1 id="subText" className={`z-50 text-center font-karbonBold text-xl text-boomsWhite relative linear -top-36 md:-top-32 lg:-top-28 ${logoHide}`}>Coming to a pizza party new you...</h1>
      <div className='opacity-0'>space</div>
      
      <IntroBox
        windowSize={windowSize}
        setMask={setMask}
        logoFlasher={logoFlasher}
      />
      <div id="vidContainer">
        <video autoPlay muted loop id="heroBG" className=''>
          <source src={video} type="video/mp4" />
        </video> 
      </div>
     
    </div>
  );
}

export default App;
