import { useState } from "react";
import { Formulario } from "./Formulario"

export const Banner = (baner) => {

  return (
    <>
        <div className="flex justify-center">
            <img src={`https://sgp-web.nyc3.cdn.digitaloceanspaces.com/CCAmigos/Eventos/`+baner.baner} className="max-w-full h-auto rounded-lg" />
        </div>
    </>
  )
}
