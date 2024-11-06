import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';


describe("ExpandableText", () => {
    it('should render the full text if less than 255 chars', () => {
        const _text = "Short Text";
        
        //render the component
        render(<ExpandableText text={_text}></ExpandableText>);     
        
        //get the text
        const text = screen.getByText(_text);
        expect(text).toBeInTheDocument();
       
    });

    it('should truncate the text if longer than 255 chars', () => {
        const _text = 'a'.repeat(256);
        
        //render the component
        render(<ExpandableText text={_text}></ExpandableText>);     
        
        //get the text
        const truncatedText = _text.substring(0, 255) + '...';
        const text = screen.getByText(truncatedText);
        expect(text).toBeInTheDocument();

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
        
       
    });

    
    //user interactions - expanding the text
    it('should expand text when show more button is clicked', async() => {
        const _text = 'a'.repeat(256);
        //render the component
        render(<ExpandableText text={_text}></ExpandableText>);     

        const button = screen.getByRole('button');
           
        //get the text
        const truncatedText = _text.substring(0, 255) + '...';
        const text = screen.getByText(truncatedText);
        //user event on the button
        const user = userEvent.setup();
        await user.click(button);

        expect(text).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    });
    
    //user interactions - collapsing the text
    it('should collapse text when show less button is clicked', async() => {
        const _text = 'a'.repeat(256);
        //render the component
        render(<ExpandableText text={_text}></ExpandableText>);     

        const button = screen.getByRole('button');
           
        //get the text
        const truncatedText = _text.substring(0, 255) + '...';
        const text = screen.getByText(truncatedText);
        //user event on the button
        const user = userEvent.setup();
        await user.click(button);

        //collapse the text
        await user.click(button);

        expect(text).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
    });
    
});