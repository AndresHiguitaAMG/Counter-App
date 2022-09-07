import { render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => {
    const value = 10;
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inical de 100', () => {
        render(<CounterApp value={100} />);

        expect(screen.getByText(100)).toBeTruthy();
        
        //Mi solución a este test, solo me falto en el toContain convertirlo a string para poder pasar el test, estuve cerca de la solución
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain("100");
    });
})