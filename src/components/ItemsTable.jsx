import React from 'react'

export const ItemsTable = () => {

    const items = [
        { id: 1, part: 'MLN-ARA-16MM-WENG', description: 'MELAMINA 16MM WENGUE 1.22 X 2.44 MTS. ARAUCO', quantity: 4, price: 849.94, total: 3399.76 },
        { id: 2, part: 'CO-CH', description: 'CORTES HOJA CHCIA (1.22 X 2.44 MTS)', quantity: 4, price: 25.00, total: 100.00 }
    ];

  return (
    <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
        <thead className='bg-gray-400 text-white uppercase'>
            <tr>
            <th className="border border-gray-300 p-2">N° Parte</th>
            <th className="border border-gray-300 p-2">Descripción</th>
            <th className="border border-gray-300 p-2">Cantidad</th>
            <th className="border border-gray-300 p-2">Precio</th>
            <th className="border border-gray-300 p-2">Importe</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
            <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.part}</td>
                <td className="border border-gray-300 p-2">{item.description}</td>
                <td className="border border-gray-300 p-2 text-center">{item.quantity}</td>
                <td className="border border-gray-300 p-2 text-right">{item.price.toFixed(2)}</td>
                <td className="border border-gray-300 p-2 text-right">{item.total.toFixed(2)}</td>
            </tr>
            ))}
        </tbody>
    </table>

  )
}
