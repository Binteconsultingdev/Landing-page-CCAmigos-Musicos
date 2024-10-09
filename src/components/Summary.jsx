import React from 'react'

export const Summary = () => {

    const subtotal = 3017.04;
    const iva = 482.73;
    const total = 3499.77;

  return (
    <div className="flex gap-4 mb-6">
      <div className='w-full'>
        <div className="flex flex-col items-end text-center">
          <p className="font-semibold">Subtotal: <span className='text-gray-500 font-thin pl-10'>{subtotal.toFixed(2)}</span></p>
          <p className="font-semibold">IVA 16%:  <span className='text-gray-500 font-thin pl-10'>{iva.toFixed(2)}</span></p>
          <p className="font-semibold">Total:    <span className='text-gray-500 font-thin pl-10'>{total.toFixed(2)}</span></p>
        </div>
      <button className="w-full bg-[#365326] text-white px-4 py-2 mt-4 hover:bg-[#3e662a] rounded-3xl uppercase">Generar Factura</button>
      </div>
    </div>
  )
}
