import { useEffect, useState } from "react";
import axios from 'axios';

export const Evento = () => {
    const [options, setOptions] = useState([]);
    const [uniqueEventDetails, setUniqueEventDetails] = useState([]);

    useEffect(() => {
      // Función para obtener los datos de la API
      const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:4002/api/event'); // Ajusta la URL según tu API
            // console.log(response.data.data)
            // Obtener solo los id_evento y fecha_evento del response
            const eventDetails = response.data.data.map(item => ({
                id_evento: item.id_evento,
                fecha_evento: item.fecha_evento,
                nombre_evento: item.nombre_evento
            }));
            
            // Crear un nuevo arreglo con valores únicos de id_evento y fecha_evento
            const uniqueDetails = [];
            const seen = new Set();

            eventDetails.forEach(detail => {
                const identifier = `${detail.id_evento}-${detail.fecha_evento}`;
                if (!seen.has(identifier)) {
                  seen.add(identifier);
                  uniqueDetails.push(detail);
                }
            });
            // Actualizar el estado con los valores únicos
            setUniqueEventDetails(uniqueDetails);
            console.log(uniqueDetails);

            setOptions(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <>
            {/* <!-- Evento --> */}
            <div className="form-control">
                <label className="text-white font-thin">Evento:</label>
                <select 
                    name="evento" 
                    id="eevento" 
                    className="label-control" 
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
        </>
    )
}
