import { render, screen } from '@testing-library/react';
import UserDetail from '../pages/UserDetail';
import { MemoryRouter, Routes, Route } from 'react-router';

const renderWithRouter = (init: string) => {
    return render(
        <MemoryRouter initialEntries={[init]}>
            <Routes>
                <Route path="/dashboard/users/:id" element={<UserDetail />}/>
            </Routes>
        </MemoryRouter>
    )
}

describe('UserDetail Component', () => {
    test('render our User tab', async () => {
        renderWithRouter('/dashboard/users/3');

        const divElement = await screen.findByTestId('div-element');

        expect(divElement).toBeInTheDocument();
        expect(divElement.getAttribute('data-testid')).toBe('div-element')
    })
})