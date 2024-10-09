import React from 'react'

export const Footer = () => {
  return (
    <div className="mt-6 bg-[#788d1c] text-center">
      <div className='w-full p-2 pl-12 pr-12 flex justify-between'>
        <p className="mt-2 text-white text-lg flex items-center">Aviso de Privacidad:</p>
        <p className="mt-2 text-white text-lg flex items-center">Desarrollado por:
          <img src="img/Binte-Logo.png" alt="logo empresa" className='w-24' />
        </p>
      </div>
    </div>
  )
}
