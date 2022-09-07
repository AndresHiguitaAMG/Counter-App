import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe retornar un URL de la imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });

    test('getImagen debe retornar un error si no tenemos una api key', async () => {
        const url = await getImagen();

        expect(url).toBe('No se encontro la imagen');
    });
});