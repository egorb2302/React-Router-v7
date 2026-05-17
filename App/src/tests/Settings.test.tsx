import { renderWithRouter } from './Login.test';
import Settings from '../pages/Settings';
import { screen } from '@testing-library/react';

describe('Settings Component', () => {
    test('renders form elements', () => {
        renderWithRouter(<Settings />);

        expect(screen.getByPlaceholderText('name'))
            .toBeInTheDocument();
        expect(screen.getByPlaceholderText('phone'))
            .toBeInTheDocument();
        expect(screen.getByPlaceholderText('email'))
            .toBeInTheDocument();
    })
})