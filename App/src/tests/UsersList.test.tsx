import { screen } from '@testing-library/react';
import UsersList from '../pages/UsersList';
import { renderWithRouter } from './Login.test';
import { userEvent } from '@testing-library/user-event';

describe('UsersList Component', () => {
    test('renders props from data array', () => {
        renderWithRouter(<UsersList />)

        const list = screen.getByRole('list');
        const listItems = screen.getAllByRole('listitem');
        
        expect(list).toBeInTheDocument();
        listItems.forEach((li) => {
            expect(li).toBeInTheDocument();
        })
    })

    test('Show all btn remove serach params', async () => {
        const user = userEvent.setup();
        renderWithRouter(<UsersList />)

        const btn = screen.getByRole('button', { name: 'Show All' });
        const path = '/dashboard';

        await user.click(btn)
        
        expect(document.location.pathname).toBe(path);
    })

    test('correct search params', async () => {
        const user = userEvent.setup();
        renderWithRouter(<UsersList />)

        const markInput = screen.getByPlaceholderText('mark');
        const nameInput = screen.getByPlaceholderText('name');

        const params = "?mark=2&name=m";

        await user.type(markInput, '2');
        await user.type(nameInput, 'm');

        expect(document.location.search).toBe(params)
    })
})