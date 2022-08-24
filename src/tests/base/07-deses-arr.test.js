import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un número', () => {
        const arr = retornaArreglo();
        expect(arr).toEqual(['ABC', 123]);
        
        //Otro ejemplo de curso,
        const [ letras, numeros ] = retornaArreglo();
        // console.log(typeof numeros);
        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string"); //En caso de que se aleatorio el dato pasado.
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe("number"); //En caso de que se aleatorio el dato pasado.
        
        //también así, como lo hice yo,
        // const myArr = ['ABC', 123];
        // expect(arr).toEqual(myArr);
    })
})