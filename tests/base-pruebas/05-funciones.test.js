import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // console.log(user);

        expect(testUser).toEqual(user);
    });

    test('getUserActivo debe retornar un objeto', () => {
        const name = "Andres";
        const userActivo = getUsuarioActivo(name);
        console.log(userActivo);
        const testUserAtivo = {
            uid: 'ABC567',
            username: name
        };

        //Otra forma de resolver la tarea:
        // const name = "Andres";
        // const userActivo = getUsuarioActivo(name);
        
        // expect(userActivo).toStrictEqual({
        //     uid: 'ABC567',
        //     username: name
        // });
        
        expect(userActivo).toStrictEqual(testUserAtivo);
    });
});