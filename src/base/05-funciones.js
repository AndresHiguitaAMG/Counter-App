const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

// Tarea
//Otra forma de evaluar el test
// export const getUsuarioActivo = (nombre = "Andres") =>({
//     uid: 'ABC567',
//     username: nombre
// })
export const getUsuarioActivo = (nombre) =>({
    uid: 'ABC567',
    username: nombre
})



