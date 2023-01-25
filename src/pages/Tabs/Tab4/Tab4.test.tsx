import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab4 from './Tab4';

describe('<Tab4 />', () => {
  test('it should mount', () => {
    render(<Tab4 />);

    const tab4 = screen.getByTestId('Tab4');

    expect(tab4).toBeInTheDocument();
  });
});
