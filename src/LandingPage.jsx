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
            const response = await axios.post(import.meta.env.VITE_URL_LOCAL_LANDING, data, {
              headers: { 'Content-Type': 'application/json' },
            });
            // console.log(response)
            setInfoLanding(response.data.data);
            setLoading(false)
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);

  const { id, baner, informacion_evento, color, campos, url_pagina_link } = infoLanding
  
  // Extraer el Texto
  const infoEvent = informacion_evento
  
  // Cambiar el Color
  useEffect(() => {
    // Aplicar el color al body
    document.body.style.backgroundColor = color;
  }, [color]); // Volver a aplicar el color cada vez que cambie

  return (
    <>
      {
        loading ? (
          <div>
            <Loader />
          </div>
        ) :
        (
          <body className={`bg-[${color}]`}>
            <div className="p-4">
                <Banner 
                  baner={baner}
                />
            </div>
            
            <div className="mt-24">
                <InfoLanding 
                  infoEvent={infoEvent}
                />
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
          </body>
        )
      }
    </>
    
  )
}
