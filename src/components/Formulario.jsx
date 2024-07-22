import React, { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import { Evento } from './Evento';

export const Formulario = () => {

    const [dataNombre, setDataNombre] = useState('')
    const [dataEdad, setDataEdad] = useState('')
    const [dataIglesia, setDataIglesia] = useState('')
    const [dataEmail, setDataEmail] = useState('')
    const [dataTelefono, setDataTelefono] = useState('')
    const [dataInstrumento, setDataInstrumento] = useState('') 
    const [dataEvento, setDataEvento] = useState(0) 
    const [datafile, setDataFile] = useState([]) 
    const [cargando, setCargando] = useState(true)
    

    // Setear el Archivo
    const onDrop = useCallback((acceptedFiles) => {
        setDataFile(acceptedFiles[0]);
    }, []);

    // console.log(dataEvento);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ onDrop });

    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        iglesia: '',
        email: '',
        telefono: '',
        id_instrumento: '',
        id_evento: Number,
        file: null,
    });

    // Asignar los valores del state
    formData.nombre = dataNombre, 
    formData.edad = dataEdad,
    formData.iglesia = dataIglesia,
    formData.email = dataEmail,
    formData.telefono = dataTelefono
    formData.id_instrumento = parseInt(dataInstrumento)
    formData.id_evento =  parseInt(dataEvento)
    formData.file = datafile
    
    const validateForm = () => {
        const { nombre, edad, iglesia, email, telefono, id_instrumento, id_evento } = formData;
        return nombre && edad && iglesia && email && telefono && id_instrumento, id_evento ;
    };

    const handleDeteleArray = () => {
        acceptedFiles.shift()
        setCargando(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
            timer: 2000,
          });
          return;
        }

        const formDataToSend = new FormData();
        for (const key in formData) {
            // console.log(formData);
            formDataToSend.append(key, formData[key]);
        }

        try {
            setCargando(false)
            // https://developer.binteapi.com:4003/api/register/client
            // http://localhost:4002/api/register/client
            const response = await axios.post('http://localhost:4002/api/register/client', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            //   'Content-Type': 'application/json'
                },
            });
            // console.log(response);
            if (response.status === 200) {
                setDataNombre('');
                setDataEdad('');
                setDataIglesia('');
                setDataEmail('');
                setDataTelefono('');
                setDataInstrumento('');
                setDataEvento(0);
                setDataFile([])
                handleDeteleArray()
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Exitoso',
                    text: 'El registro se ha realizado correctamente',
                    timer: 2000,
                });
            } else {
                Swal.fire({
                icon: 'error',
                title: 'Error',
                text: response.data.message,
                timer: 3000,
                });
            }
        } catch (error) {
            // console.log(error.response);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.message,
                timer: 3000,
            });
        }
    };
    

  return (
    <div>
        <form 
            onSubmit={handleSubmit}
            className="mx-auto container m-5 md:pr-[10%] md:pl-[10%] pr-[5%] pl-[5%] space-y-2"
        >
            <h2 className="text-3xl text-center text-white font-bold uppercase">Registrate</h2>
            <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                {/* <!-- Nombre --> */}
                <div className="form-control md:col-span-2">
                    <label className="text-white font-thin">Nombre Completo:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        className="label-control uppercase" 
                        value={dataNombre}
                        onChange={(e) => setDataNombre(e.target.value)}
                        required
                    />
                </div>
                {/* <!-- Edad --> */}
                <div className="form-control">
                    <label className="text-white font-thin">Edad:</label>
                    <input 
                        type="number" 
                        id="edad" 
                        className="label-control"
                        value={dataEdad} 
                        onChange={(e) => setDataEdad(e.target.value)}
                        required
                    />
                </div>
            </div>
            {/* <!-- Iglesia --> */}
            <div className="form-control">
                <label className="text-white font-thin">Iglesia:</label>
                <input 
                    type="text" 
                    id="iglesia" 
                    className="label-control uppercase" 
                    value={dataIglesia} 
                    onChange={(e) => setDataIglesia(e.target.value)}
                    required
                />
            </div>
            <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                {/* <!-- Email --> */}
                <div className="form-control md:col-span-2">
                    <label className="text-white font-thin">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="label-control" 
                        value={dataEmail} 
                        onChange={(e) => setDataEmail(e.target.value)}
                        required
                    />
                </div>
                {/* <!-- Télefono / WhatsApp --> */}
                <div className="form-control">
                    <label className="text-white font-thin">Télefono <span className='md:visible invisible'>/ WhatsApp:</span></label>
                    <input
                        type="number" 
                        id="telefono" 
                        className="rounded-md p-2 md:relative"
                        value={dataTelefono} 
                        onChange={(e) => setDataTelefono(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="">
                {/* <!-- Instrumento --> */}
                <div className="form-control">
                    <label className="text-white font-thin">Instrumento:</label>
                    <select 
                        name="instrumento" 
                        id="instrumento" 
                        className="label-control" 
                        value={dataInstrumento} 
                        onChange={(e) => setDataInstrumento(e.target.value)}
                        required
                    >
                        <option value="">SELECCIONA UN INSTRUMENTO</option>
                        <option value="1">PIANO</option>
                        <option value="2">BAJO</option>
                        <option value="3">GUITARRA</option>
                        <option value="4">VOZ</option>
                        <option value="5">BATERÍA</option>
                        <option value="6">OTRO</option>
                    </select>
                </div>
            </div>
           {/* <div>
                <!-- Evento --> 
                <div className="form-control">
                    <label className="text-white font-thin">Evento:</label>
                    <select 
                        name="evento" 
                        id="evento" 
                        className="label-control" 
                        value={dataEvento} 
                        onChange={(e) => setDataEvento(e.target.value)}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        {uniqueEventDetails.map((option) => (
                            <option key={option.id_evento} value={option.id_evento}>
                                Evento: {option.nombre_evento} - Fecha: {option.fecha_evento}
                            </option>
                        ))}
                    </select>
                </div>
             </div>  */}
            {/* Drag adn Drop zone */}
            <div className="flex justify-center items-center w-full">
                <div
                    {...getRootProps()}
                    className="flex items-center flex-col justify-center w-full mt-5"
                >
                    <label className="text-white text-left font-thin uppercase">Comprobante de Pago:</label>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center mt-2 justify-center w-full h-10 border-2 border-white border-dashed rounded-lg cursor-pointer bg-transparent ">
                        <input {...getInputProps()} 
                            type="file"
                            accept="image/*"
                            name="file"
                            // onChange={handleRemoveFiles}
                        />
                        {datafile ? (
                            <p className="uppercase mb-2 text-sm text-white dark:text-gray-400">{datafile.name}</p>
                        ) : (
                            <p className="uppercase mb-2 text-sm text-white dark:text-gray-400">Seleccionar Imagen</p>
                        )}
                    </label>
                    {datafile && 
                        <div>
                            {acceptedFiles[0] &&  
                                <img src={URL.createObjectURL(acceptedFiles[0])} alt="" 
                                    className='w-48 h-64 mt-5 rounded-md'
                                />
                            }
                        </div>
                    }
                </div>
            </div> 
            {/* Boton */}
            <div className="flex items-center justify-center">
                {cargando ? (
                    <button
                        className="mt-4 flex uppercase text-white items-center justify-center bg-[#B9B5BF] hover:bg-[#9f9ca4] p-3 rounded-lg w-1/2 text-center"
                        type="submit"
                    >Registrarse</button>
                ) : (
                    <button
                        className="mt-4 cursor-not-allowed flex uppercase opacity-20 text-white items-center justify-center bg-[#a9a9aa] p-3 rounded-lg w-1/2 text-center"
                        disabled
                    >Registrarse</button>
                )}
            </div>
        </form>
    </div>
  )
}
