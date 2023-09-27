import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className=' w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] ax-auto px-8 flex flex-col justify-center h-full pl-20'>
        <p>Hi, My Name is </p>
        <h1>Dushan </h1>
        <h2>I am Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        <button> View Work <HiArrowNarrowRight/></button>
        </div>

      </div>
   

    </div>
  )
}

export default Home