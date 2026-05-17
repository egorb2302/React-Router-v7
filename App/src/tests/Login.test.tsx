import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Login from '../pages/Login';
import React from 'react';
import { BrowserRouter } from 'react-router';

export const renderWithRouter = (component: React.ReactNode) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    )
}

describe('Login Compponent', () => {
    const mockOnLogin = jest.fn();

    beforeEach(() => {
        mockOnLogin.mockClear()
    })

    test('renders form elements', () => {
        renderWithRouter(<Login onLogin={mockOnLogin} />);

        expect(screen.getByPlaceholderText('email@example.com'))
            .toBeInTheDocument();
        expect(screen.getByPlaceholderText('qwerty123'))
            .toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' }))
            .toBeInTheDocument();
    })

    test('shows error when inputs are empty', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Login onLogin={mockOnLogin} />)

        const submitButton = screen.getByRole('button', { name: 'Login' });
        await user.click(submitButton);

        expect(screen.findByText('Invalid pass or email'));
        expect(mockOnLogin).not.toHaveBeenCalled();
    })

    test('onLogin call with correct data', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Login onLogin={mockOnLogin} />)

        const email = screen.getByPlaceholderText('email@example.com');
        const pass = screen.getByPlaceholderText('qwerty123');
        const btn = screen.getByRole('button', { name: 'Login' })

        await user.type(email, 'admin@gmail.com');
        await user.type(pass, '123');

        expect(email).toHaveValue('admin@gmail.com');
        expect(pass).toHaveValue('123');

        await user.click(btn);
        
        expect(mockOnLogin).toHaveBeenCalledTimes(1);
    })
})