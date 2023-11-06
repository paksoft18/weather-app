import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import WeatherApp from './components/Weather';

// Mock the fetch function to simulate API calls
global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
  })
);

describe('WeatherApp', () => {
  test('renders loading message initially', async () => {
    render(<WeatherApp />);
    expect(screen.getByText('Loading weather data...')).toBeInTheDocument();
  });

  test('renders error message if API call fails', async () => {
    // Mock the fetch function to simulate an error
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<WeatherApp />);
    await waitFor(() => {
      expect(screen.getByText('Error loading weather data')).toBeInTheDocument();
    });
  });


});
