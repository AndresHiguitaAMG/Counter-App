


const nombre   = 'Andres';
const apellido = 'Higuita';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre = "Edwin") {
    return 'Hola ' + nombre + "!";
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );