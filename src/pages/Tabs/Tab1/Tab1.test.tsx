import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab1 from './Tab1';

describe('<Tab1 />', () => {
  test('it should mount', () => {
    render(<Tab1 />);

    const tab1 = screen.getByTestId('Tab1');

    expect(tab1).toBeInTheDocument();
  });
});
