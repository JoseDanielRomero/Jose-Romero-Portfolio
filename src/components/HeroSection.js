import React from 'react'
import profilePhoto from '../images/profile-photo-jr.jpg'

function HeroSection() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row ">
      <div className="h-1/3 w-full md:h-full md:w-1/2 md:pr-10 flex flex-col items-start justify-start md:justify-center gap-4 ">
        <h1 className="font-poppins font-bold text-[30px] md:text-[50px] leading-[2.3rem] md:leading-[55px] text-gray-800">Hi 👋, I’m José Daniel</h1>
        <p className="font-poppins text-base font-normal text-slate-600">I am a <b>Front-end Developer</b> specialized in <b>React</b>, as well as in the technologies needed to create dynamic and highly interactive web applications.</p>
        <p className="hidden font-poppins text-base font-normal md:block text-slate-600">I consider myself enthusiastic about learning new technologies, finding solutions to work challenges and being part of a collaborative environment.</p>
      </div>
      <div className="h-2/3 w-full md:h-full md:w-1/2 flex items-center justify-center ">
        <div className="h-[150px] w-[200px] md:h-[220px] md:w-[270px] rounded-xl flex flex-col items-center justify-center bg-white shadow-lg">
          <div className="h-28 w-28 bg-white rounded-full mb-4"><img src={profilePhoto} className="shadow-md object-contain max-h-full max-w-full rounded-full" /></div>
          <p className="font-poppins text-base font-medium text-gray-800">José Romero</p>
          <p className="font-poppins text-sm font-normal text-slate-500">Guayaquil, Ecuador 🇪🇨</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;