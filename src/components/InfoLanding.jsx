import { useEffect, useState } from "react";
import { InfoEvento } from "./InfoEvento";

export const InfoLanding = ({ infoLanding }) => {
    console.log(infoLanding);

    const { informacion_evento, fecha_evento, fecha_evento_fin, nombre_evento, talleres } = infoLanding;

    const finalInfo = infoLanding.infoEvent;
    const [result, setResult] = useState([]);

    useEffect(() => {
        // Convertir input a una cadena
        const stringInput = String(finalInfo);

        // Dividir el string en partes usando el punto como delimitador
        const parts = stringInput.split('.').filter(part => part.trim() !== '');

        setResult(parts);
    }, [finalInfo]);

    // Convertir talleres de string a array
    const talleresArray = talleres
        ? talleres.split(',').map(taller => taller.trim())
        : [];

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl text-white text-center font-bold uppercase">{nombre_evento}</h2>

            <div className="mr-12 ml-12 mt-5">
                <div>
                    {
                        result.length > 0 ? (
                            <div className="text-white mb-4 text-center uppercase">
                                {informacion_evento}
                            </div>
                        ) : (
                            <div className="text-white mb-4 text-center uppercase">
                                No hay Información del Evento
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="mr-12 ml-12 mt-10 mb-20">
                <div className="text-center m-2">
                    <h2 className="text-white uppercase text-2xl font-bold">Talleres</h2>
                </div>
                <ol className="space-y-4 text-gray-500 list-disc dark:text-white">
                    <div className="flex gap-10 justify-center">
                        <div className="uppercase">
                            {talleresArray.slice(0, Math.ceil(talleresArray.length / 2)).map((taller, index) => (
                                <li key={index}>{taller}</li>
                            ))}
                        </div>
                        <div className="uppercase">
                            {talleresArray.slice(Math.ceil(talleresArray.length / 2)).map((taller, index) => (
                                <li key={index}>{taller}</li>
                            ))}
                        </div>
                    </div>
                </ol>
            </div>

            <InfoEvento 
                fecha_evento={fecha_evento}
                fecha_evento_fin={fecha_evento_fin}
            />
        </div>
    );
};
