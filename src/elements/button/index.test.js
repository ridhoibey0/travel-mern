import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Button from './index';

test('Should not allowed click button if isDisabled present', () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});
test('Should not allowed click button if isLoading present', () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText('Loading...')).toBeInTheDocument();
  expect(container.querySelector('span.spinner-border')).toBeInTheDocument();
});

test('should <a></a>', () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );
  expect(container.querySelector('a')).toBeInTheDocument();
});
