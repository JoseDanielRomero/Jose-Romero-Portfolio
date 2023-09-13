import React from 'react'

function Navbar() {
  return (
    <nav className="h-24 w-full flex flex-row items-center justify-between">
      <div className="w-auto flex flex-row items-center justify-start gap-2">
        <h2 className="font-poppins text-xl font-medium tracking-wide text-gray-800">JoséRomero.dev</h2>
        <div className="hidden h-8 w-auto px-3 rounded-full bg-violet-200 flex-col items-center justify-center sm:flex">
          <p className="font-medium text-sm text-violet-500">Now Avalaible</p>
        </div>
      </div>
      <div className="w-2/5">

      </div>
    </nav>
  )
}

export default Navbar;