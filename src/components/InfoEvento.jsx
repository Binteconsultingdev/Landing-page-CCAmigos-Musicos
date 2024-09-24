import { formatearFecha } from "../helpers/functions";

export const InfoEvento = ({fecha_evento, fecha_evento_fin}) => {
  
  return (
    <div className="text-white mr-12 ml-12 mt-5">
        <h3 className="text-3xl text-center font-bold uppercase">Fechas del Evento</h3>
        <div className="flex flex-col justify-center items-center mt-10 mb-10">
            <p className="uppercase"><span className="font-bold">Incio: </span>{formatearFecha(fecha_evento)}</p>
            <p className="uppercase"><span className="font-bold">Fin: </span>{formatearFecha(fecha_evento_fin)}</p>
        </div>
    </div>
  )
}
