import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestLayout from './TestLayout';

describe('<TestLayout />', () => {
  test('it should mount', () => {
    render(<TestLayout />);
    
    const testLayout = screen.getByTestId('TestLayout');

    expect(testLayout).toBeInTheDocument();
  });
});