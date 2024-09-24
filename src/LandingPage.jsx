import { useEffect, useState } from "react"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Formulario } from "./components/Formulario"
import { InfoLanding } from "./components/InfoLanding"
import axios from 'axios'
import { splitStringIntoArray } from "./helpers/functions"
import { Loader } from "./components/Loader"

export const LandingPage = () => {

  // Extraer la URL de la página actual
  const currentUrl = window.location.href;

  // Formatear la URL en un objeto JSON
  const data = {
    url_pagina_link: currentUrl
  };

  const [infoLanding, setInfoLanding] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await axios.post(import.meta.env.VITE_URL_SERVER_LANDING, data, {
          headers: { 'Content-Type': 'application/json' },
        });

        console.log(response.data);
        
        // Validar si la respuesta está vacía
        if (!response.data.data || Object.keys(response.data.data).length === 0) {
          setInfoLanding(null); // O puedes usar otro estado para controlar esta condición
          setLoading(false);
        } else {
          setInfoLanding(response.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Manejar el estado de carga en caso de error
      }
    };
    fetchData();
  }, []);
  


  const { id, baner, informacion_evento, color, campos, url_pagina_link } = infoLanding || {};

  console.log(infoLanding);
  
  // Extraer el Texto
  const infoEvent = informacion_evento
  
  // Cambiar el color de fondo del body
  useEffect(() => {
    if (color) {
      document.body.style.backgroundColor = color;
    }
  }, [color]);

  
  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : infoLanding === null ? (
        <div className="container mx-auto">
          <p className="text-3xl text-center mt-24 font-bold uppercase text-cyan-900">La página no existe.</p>
        </div>
      ) : (
        <div style={{ backgroundColor: color }} className="bg-custom">
          <div className="p-4">
            <Banner baner={baner} />
          </div>
  
          <div className="mt-24">
            <InfoLanding infoEvent={informacion_evento} />
          </div>
  
          <div className="mt-20">
            <Formulario 
              id={id}
              url_pagina_link={url_pagina_link} 
              campos={campos} 
            />
          </div>
  
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
  
}
