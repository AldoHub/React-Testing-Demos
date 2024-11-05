import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe("ProductImageGallery", () => {
    it('should render nothing if an empty array is given', () => {
        //render the component
        const {container} = render(<ProductImageGallery imageUrls={[]}></ProductImageGallery>);
        //the element must be empty
        expect(container).toBeEmptyDOMElement();


    });

    it('should render a list of images', () => {

        const imageUrls = ["url1", "url2"];

        //render the component
        render(<ProductImageGallery imageUrls={imageUrls}></ProductImageGallery>);
        //get all the images
        const images = screen.getAllByRole('img');
        expect(images).length(2);

        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        })

    });

})