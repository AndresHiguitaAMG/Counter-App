import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman', 
            owner: 'DC'
        });
    });

    test('getHeroeById debe retornar un undefined si no existe el heroe pasado por ID', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar los heroes de DC', () => {
        const ownerHero = "DC";
        const ownerTest = getHeroesByOwner(ownerHero);
        const findHeroByOwner = heroes.filter((h) => h.owner === ownerHero);

        expect(ownerTest).toStrictEqual(findHeroByOwner);
    });
});