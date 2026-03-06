import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('socket.io-client', () => ({
  default: vi.fn(() => ({
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  })),
}));

import App from './App';

test('renders login form on initial load', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /join/i })).toBeInTheDocument();
});
