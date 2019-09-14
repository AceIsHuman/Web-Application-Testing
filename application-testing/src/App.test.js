import React from 'react';
import * as rtl from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import App from './App';

test('addBall fires on button click', () => {
  const { queryByText } = rtl.render(<App />);
  const addBall = queryByText(/add ball/i);
  fireEvent.click(addBall);
});
