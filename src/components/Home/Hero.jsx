import React from 'react'
import heroBackground from '../../assets/images/home-hero-bg-2x.png'
import appPreviewLeft from '../../assets/images/app-preview-left-lg.png'
import appPreviewRight from '../../assets/images/app-preview-right-lg.png'

const Hero = () => {
  return (
    <>
      {/* Hero container */}
      <img src={heroBackground} className='home-hero-image'></img>
      <div className='relative flex flex-col items-center py-8 md:py-24'>

        {/* hero text and buttons */}
        <div className='content-max-width flex flex-col justify-center px-2 items-center gap-5 md:gap-11'>
          <h3 className='ff-montserrat-700  md:text-2xl clr-grey md:text-white'>
            Food app
          </h3>
          <h1 className='md:ff-poppins-700 ff-montserrat-700 md:leading-tight leading-snug md:text-6xl text-4xl text-center md:text-white clr-secondary'>
            Why stay hungry when you can order from Bella Onojie
          </h1>
          <h4 className='ff-montserrat-400 text-2xl text-center text-gray-500 md:text-white'>
            Download the bella onoje's food app now on
          </h4>
          <div className='flex flex-col md:flex-row gap-4 md:gap-8 py-6'>
            <div className='button filled-button'>
              <a href='#' className='ff-montserrat-600 text-2xl px-0.5'>Playstore</a>
            </div>
            <div className='button outlined-button md:border-white md:text-white'>
              <a href='#' className='ff-montserrat-600 text-2xl'>App store</a>
            </div>
          </div>
        </div>

        {/* hero phone-images */}
        <div className='w-full h-36 py-12 app-preview-container'>
          {/* imagecontainer */}
          <div className='relative app-preview-inner-container'>
            <div className='app-preview app-preview-left'>
              <img src={appPreviewLeft}></img>
            </div>
            <div className='app-preview app-preview-right'>
              <img src={appPreviewRight}></img>
            </div>
          </div>
        </div>

        {/* bottom header and hr */}
        <div className='w-full'>
          <h2 className='ff-poppins-600 md: text-center text-2xl md:text-4xl py-4 pb-4'>How the app works</h2>
          <hr className='md:mx-8 my-5 md:my-8 bg-gray-200 h-0.5 border-none'></hr>
        </div>

      </div>
    </>
  )
}

export default Hero