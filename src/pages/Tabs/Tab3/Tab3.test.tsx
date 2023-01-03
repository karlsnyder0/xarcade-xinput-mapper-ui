import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab3 from './Tab3';

describe('<Tab3 />', () => {
  test('it should mount', () => {
    render(<Tab3 />);

    const tab3 = screen.getByTestId('Tab3');

    expect(tab3).toBeInTheDocument();
  });
});
