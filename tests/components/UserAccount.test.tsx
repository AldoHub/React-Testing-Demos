import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe("UserAccount", () => {
    it('should render user name', () => {

        const user: User = {
            id: 1,
            name: "TestUser",
            isAdmin: false
        }
        //render the component
        render(<UserAccount user={user}></UserAccount>)
       
        //get the dom
        screen.debug();
        const username = screen.getByText(user.name);

        expect(username).toBeInTheDocument();
        expect(username).toHaveTextContent(/TestUser/i);
    });

    it('should render edit button if user is admin', () => {

        const user: User = {
            id: 1,
            name: "TestUser",
            isAdmin: true
        }
        //render the component
        render(<UserAccount user={user}></UserAccount>)
       
        //get the dom
        screen.debug();
        const editButton = screen.getByRole("button");

        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/Edit/i);
    });

    it('should not render edit button if user is not admin', () => {

        const user: User = {
            id: 1,
            name: "TestUser",
            isAdmin: false
        }
        //render the component
        render(<UserAccount user={user}></UserAccount>)
       
        //get the dom
        screen.debug();
        //use queryByRole since the button will not render
        const editButton = screen.queryByRole("button");

        expect(editButton).not.toBeInTheDocument();
    });

});