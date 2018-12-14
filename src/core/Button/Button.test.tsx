import React from 'react';
import { render } from 'react-testing-library';

import Button from './Button';
import { cssFromBaseStyles } from '../utils';
import { baseStyles } from './Button.baseStyles';

test('calling render with the same component on the same container does not remount', () => {
  const buttonRendered = render(<Button>Test</Button>);
  const { getByTestId, rerender } = buttonRendered;
  expect(getByTestId('button').textContent).toBe('Test');

  // re-render the same component with different props
  rerender(<Button>Test two</Button>);
  expect(getByTestId('button').textContent).toBe('Test two');
});

test('CSS export', () => {
  const css = cssFromBaseStyles(baseStyles);
  expect(css).toEqual(expect.stringContaining('color'));
});