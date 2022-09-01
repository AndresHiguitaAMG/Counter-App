import { getImagen } from '../../base/11-async-await';

describe("Pruebas en 11-Masync-await", () => {
    test('getImagen debe retornar un URL de la imagen', async() => {
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    });

    test('debe retornar un error si no tenemos api key', async () => {
        const resp = await getImagen();
        
        expect(resp).toBe('No se encontro la imagen'); 
    })
})