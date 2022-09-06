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
    
    //Mi solución:
    test('getHeroesByOwner debe retornar los heroes de DC', () => {
        const ownerHero = "DC";
        const ownerTest = getHeroesByOwner(ownerHero);
        const findHeroByOwner = heroes.filter((h) => h.owner === ownerHero);

        expect(ownerTest).toEqual(findHeroByOwner);
    });

    test('getHeroesByOwner debe retornar los heroes de Marvel', () => {
        const ownerHeroM = "Marvel";
        const ownerTestM = getHeroesByOwner(ownerHeroM);
        const findHeroByOwnerM = heroes.filter((he) => he.owner === ownerHeroM);

        expect(ownerTestM).toEqual(findHeroByOwnerM);
    });
    
    //Solución del instructor:
    // test('getHeroesByOwner debe de regresar heroes de DC', () => {
        
    //     const owner = 'DC';
    //     const heroes = getHeroesByOwner( owner );

    //     expect( heroes.length ).toBe( 3 );
    //     expect( heroes ).toEqual([
    //         { id: 1, name: 'Batman', owner: 'DC' },
    //         { id: 3, name: 'Superman', owner: 'DC' },
    //         { id: 4, name: 'Flash', owner: 'DC' }
    //     ]);
    //     expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )


    // });

    // test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
        
    //     const owner = 'Marvel';
    //     const heroes = getHeroesByOwner( owner );

    //     expect( heroes.length ).toBe( 2 );
    //     expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
        

    // });
});