import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab2 from './Tab2';

describe('<Tab2 />', () => {
  test('it should mount', () => {
    render(<Tab2 />);

    const tab2 = screen.getByTestId('Tab2');

    expect(tab2).toBeInTheDocument();
  });
});
