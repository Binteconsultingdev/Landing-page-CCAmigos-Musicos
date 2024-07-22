

export function splitStringIntoArray(input) {

  // Dividir el string en un arreglo usando el punto como delimitador
  const parts = input?.split('.');

  // Filtrar partes vacías para evitar elementos vacíos en el arreglo final
  const nonEmptyParts = parts.filter(part => part.trim() !== '');

  return nonEmptyParts;
}

// Ejemplo de uso
// const inputString = "Esto es un ejemplo. Y esta es la segunda parte. Aquí hay una tercera parte.";
// const result = splitStringIntoArray(inputString);

// console.log(result);
// Output: ["Esto es un ejemplo", "Y esta es la segunda parte", "Aquí hay una tercera parte"]