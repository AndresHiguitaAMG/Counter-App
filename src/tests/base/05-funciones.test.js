import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })
    test('getUsuarioActivo debe retornar un objeto', () => {
        //Otra forma de evaluación que se me ocurrio
        // const nombre = "Andres"
        // const userTest2 = {
        //     uid: 'ABC567',
        //     username: nombre
        // }
        // const user2 = getUsuarioActivo();
        const nombre = "Andres"
        const user2 = getUsuarioActivo(nombre);
        expect(user2).toEqual({
            uid: 'ABC567',
            username: nombre
        }); 
    })
})
