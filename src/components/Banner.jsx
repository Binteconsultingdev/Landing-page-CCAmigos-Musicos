import { useState } from "react";
import { Formulario } from "./Formulario"

export const Banner = (baner) => {

  return (
    <>
        <div className="flex justify-center">
            <img src={baner.baner} className="max-w-full h-auto rounded-lg" />
        </div>
    </>
  )
}
