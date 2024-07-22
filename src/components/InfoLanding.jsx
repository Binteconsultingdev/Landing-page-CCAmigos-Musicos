import { useEffect, useState } from "react";
import { InfoEvento } from "./InfoEvento"

export const InfoLanding = (infoEvent) => {

    const finalInfo = infoEvent.infoEvent
    const [result, setResult] = useState([]);

    useEffect(() => {
        // Convertir input a una cadena
        const stringInput = String(finalInfo);

        // Dividir el string en partes usando el punto como delimitador
        const parts = stringInput.split('.').filter(part => part.trim() !== '');

        setResult(parts);
    }, [finalInfo]);


  return (
    <div className="container mx-auto">
        <h2 className="text-3xl text-white text-center font-bold uppercase">Equiparte</h2>

        <div className="mr-12 ml-12 mt-5">
        <div>
            {
                result.map((parrafo, index) => (
                    <p key={index} className="text-white mb-4 text-center uppercase">
                        {parrafo}
                    </p>
                ))
            }
        </div>
        </div>

        <div className="mr-12 ml-12 mt-10 mb-20">
            <ol className="space-y-4 text-gray-500 list-disc dark:text-white">
               <div className="flex gap-10 justify-center">
                <div className="uppercase">
                    <li>Canto, audio en vivo y broadcast.</li>
                    <li>Teoría musical.</li>
                    <li>Excelencia en la adoración.</li>
                    <li>Sanidad interior.</li>
                    <li>Dirigiendo la adoración.</li>
                </div>
                <div className="uppercase">
                    <li>Viviendo en lo profético.</li>
                    <li>Bajo.</li>
                    <li>Guitarra.</li>
                    <li>Secuencias y Ableton.</li>
                    <li>Panel creativo, entre otros…</li>
                </div>
               </div>
            </ol>
        </div>

        <InfoEvento />
    </div>
  )
}
