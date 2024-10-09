import React, { useState } from 'react';
import { ItemsTable } from './ItemsTable';
import { Summary } from './Summary';

export const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    sucursal: '',
    folio: '',
    razonSocial: '',
    rfc: '',
    fiscal: '',
    cp: '',
    usoCfdi: '',
    metodoPago: '',
    correo: ''
  });

  const [isValidated, setIsValidated] = useState(true); // Estado para mostrar u ocultar los otros campos

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulación de validación de folio en la API
    try {
      const response = await fetch('https://api.example.com/validar-folio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sucursal: formData.sucursal,
          folio: formData.folio
        })
      });
      const result = await response.json();
      if (response.ok) {
        setIsValidated(true); // Si la validación es exitosa, mostrar los otros campos
        alert('Validación exitosa');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Validación de Folio */}
      <div className="grid grid-cols-3 gap-4 mb-1">
        <div>
          <label className="block text-sm font-medium text-gray-700">Selecciona la sucursal:</label>
          <input
            type="text"
            name="sucursal"
            value={formData.sucursal}
            onChange={handleChange}
            className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Ingresa folio de ticket:</label>
          <input
            type="text"
            name="folio"
            value={formData.folio}
            onChange={handleChange}
            className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
          />
        </div>
        <div className="flex justify-center items-center text-sm font-medium">
          <button
            type="submit"
            className="text-white bg-[#365326] shadow-lg p-2 pl-5 pr-5 rounded-3xl text-[12px] uppercase hover:bg-[#3e662a]"
          >
            Validar
          </button>
        </div>
      </div>

      {/* Mostrar los otros campos solo si la validación fue exitosa */}
      {isValidated && (
        <>
          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700">Razón Social:</label>
            <input
              type="text"
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
              className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
            />
          </div>

          <div className="parent grid grid-cols-7 gap-x-1 gap-y-0">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">RFC:</label>
              <input
                type="text"
                name="rfc"
                value={formData.rfc}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-3 col-end-4">
              <label className="block text-sm font-medium text-gray-700">R. Fiscal:</label>
              <input
                type="text"
                name="fiscal"
                value={formData.fiscal}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-4 col-end-5">
              <label className="block text-sm font-medium text-gray-700">C.P.:</label>
              <input
                type="text"
                name="cp"
                value={formData.cp}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-5 col-end-6 pl-16">
              <label className="block text-sm font-medium text-gray-700 mt-6"></label>
              <input
                type="text"
                name="usoCfdi"
                value={formData.usoCfdi}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-span-2 col-start-6">
              <label className="block text-sm font-medium text-gray-700">Uso CFDI:</label>
              <select
                name="usoCfdi"
                value={formData.usoCfdi}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-[6px]"
              >
                <option value="">Selecciona una opción</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="parent grid grid-cols-7 gap-x-1 gap-y-0">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mt-7"></label>
              <input
                type="text"
                name="metodoPago"
                value={formData.metodoPago}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-2 col-end-5">
              <label className="text-sm font-medium text-gray-700">Método de Pago:</label>
              <input
                type="text"
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-5 col-end-6 pl-16">
              <label className="block text-sm font-medium text-gray-700 mt-7"></label>
              <input
                type="text"
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div className="col-start-6 col-span-2">
              <label className="text-sm font-medium text-gray-700">Método de Pago:</label>
              <input
                type="text"
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
          </div>

          <div className="grid col-span-6 gap-4 mb-2">
            <div className="grid col-span-2">
              <label className="block text-sm font-medium text-gray-700">Correo:</label>
              <input
                type="text"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="bg-gray-300 mt-1 block w-full border border-gray-300 rounded-md p-1"
              />
            </div>
          </div>
          <ItemsTable />
          <Summary />
        </>
      )}
    </form>
  );
};
