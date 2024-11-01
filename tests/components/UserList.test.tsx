import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';
import { User } from '../../src/entities';

describe("UserList", () => {
    it('should render no users when the list of users is empty', () => {
        //render the component
        render(<UserList users={[]}></UserList>)

        expect(screen.getByText(/no users/i)).toBeInTheDocument();

    });


    it('should render a list of users', () => {
        
        const users: User[] = [
            {
                id: 1,
                name: "TestUser1",
                isAdmin: false
            },
            {
                id: 2,
                name: "TestUser2",
                isAdmin: true
            }

        ];
        
        //render the component
        render(<UserList users={users}></UserList>)
       
        //check the links are correct
        users.forEach(user => {
            const link = screen.getByRole('link', { name: user.name });
            expect(link).toBeInTheDocument();
            
            //check the correct href
            expect(link).toHaveAttribute('href', `/users/${user.id}`);

        })
      
    });

})