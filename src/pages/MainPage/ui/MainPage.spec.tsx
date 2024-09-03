import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('Render main page', () => {
  test('test1', () => {
    render(<MainPage />);
    const element = screen.getByTestId('test-id');
    expect(element).toBeInTheDocument();
  });
});
