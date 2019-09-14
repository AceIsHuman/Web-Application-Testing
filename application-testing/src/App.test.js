import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/dom';
import App from './App';

test('Adds strikes and reset at 3', () => {
  const { queryByText } = rtl.render(<App />);
  expect(queryByText(/ball/i)).not.toBeNull();
});
