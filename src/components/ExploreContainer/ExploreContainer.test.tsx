import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExploreContainer from './ExploreContainer';

describe('<ExploreContainer />', () => {
  test('it should mount', () => {
    render(<ExploreContainer />);

    const exploreContainer = screen.getByTestId('ExploreContainer');

    expect(exploreContainer).toBeInTheDocument();
  });
});
