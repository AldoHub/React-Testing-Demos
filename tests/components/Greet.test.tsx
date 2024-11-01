import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

//NOTE: USING GLOBALS ON defineConfig file

describe("Greet", () => {
    it('should render Hello with the name when name is provided', () => {

        //render the component
        render(<Greet name='TestUser'></Greet>)
       
        //get the dom
        screen.debug();
        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello TestUser/i);
    });

    it('should render Login button if the name is not provided', () => {

        //render the component
        render(<Greet></Greet>)
       
        //get the dom
        screen.debug();
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });

});