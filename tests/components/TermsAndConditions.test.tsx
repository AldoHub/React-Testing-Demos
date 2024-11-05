import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';


describe("TermsAndConditions", () => {
    it('should render with correct text and initial state', () => {
        //render the component
        render(<TermsAndConditions></TermsAndConditions>);     
        
        //get the heading
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        //checkbox state
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(heading).not.toBeChecked();

        //check the button is disabled
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();

    });

    //user interactions
    it('should enable the button when the checkbox is checked', async() => {
        render(<TermsAndConditions></TermsAndConditions>);   

        const checkbox = screen.getByRole('checkbox');
        
        //user event
        const user = userEvent.setup();
        await user.click(checkbox);

        //get the button and check its state
        const button = screen.getByRole('button');
        expect(button).toBeEnabled();
    });
});