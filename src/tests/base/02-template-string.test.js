import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('prueba en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Andres!', () => {
        const nombre = "Andres";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola " + nombre + "!");
    });
    test('get saludo debe retornar Hola Hanna! si no hay argumento nombre', () => {
        // const nombre = "Edwin";
        const saludo = getSaludo();
        // expect(saludo).toBe("Hola " + nombre + "!");
        expect(saludo).toBe("Hola Edwin!");
    });
})