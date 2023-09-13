import React from 'react'
import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'

function Navbar() {
  return (
    <nav className="h-24 w-full flex flex-row items-center justify-between">
      <div className="w-auto flex flex-row items-center justify-start gap-2">
        <h2 className="font-poppins text-xl md:text-2xl font-medium tracking-wide text-gray-800">JoseRomero.dev</h2>
        <div className="hidden h-8 w-auto px-3 rounded-full bg-violet-200 flex-col items-center justify-center sm:flex">
          <p className="font-medium text-sm text-violet-500">Now Avalaible</p>
        </div>
      </div>
      <div className="w-auto flex flex-row items-center justify-between gap-5 md:gap-10">
        <a href="https://github.com/JoseDanielRomero" target="_blank"><img src={githubLogo} alt="Github page" className="h-6 md:h-7"/></a>
        <a href="https://www.linkedin.com/in/jose-daniel-romero-t/" target="_blank"><img src={linkedinLogo} alt="Linkedin page" className="h-6 md:h-7"/></a>
      </div>
    </nav>
  )
}

export default Navbar;