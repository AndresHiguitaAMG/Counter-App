import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('prueba en 02-template-string.js', () => {
    test('getSaludo debe retornar "Hola Andres"', () => {
        const name = "Andres";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});