import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {
    test('deber retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('deber retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('deber retornar un arreglo con los heroes de DC', () => {
        const owner = "DC";
        const heroeOwner = getHeroesByOwner(owner);
        const heroeDataOwner = heroes.filter(o => o.owner === owner);
        console.log(heroeDataOwner);

        expect(heroeOwner).toEqual(heroeDataOwner);
    });

    test('deber retornar un arreglo con los heroes de Marvel', () => {
        const ownerMarvel = "Marvel";
        const heroeOwnerM = getHeroesByOwner(ownerMarvel);
        console.log(heroeOwnerM);

        expect(heroeOwnerM.length).toBe(2);
    });
})