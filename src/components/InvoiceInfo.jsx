import React from 'react'

export const InvoiceInfo = () => {
  return (
    <div class="grid grid-cols-2 gap-4 text-gray-600">
        <div class="text-sm p-4">
            <h3 className='text-xl font-bold '>Solicita tu factura</h3>
            <ul className='list-disc m-2'>
                <li>Para un mejor servicio, tienes 30 días naturales a partir de la fecha de tu compra para solicitar tu factura.</li>
                <br></br>
                <li>Recuerda que la fecha de la factura corresponde al día que la generas.</li>
            </ul>
        </div>
        <div class="text-sm p-4">
            <h3 className='text-xl font-bold '>Solicita tu factura</h3>
            <ul className='list-disc m-2'>
                <li>Folio de Ticket.</li>
                <li>Datos Fiscales (RFC, Razón social, Regimen Fiscal, Uso de CFDI)</li>
            </ul>
        </div>
    </div>
  )
}
