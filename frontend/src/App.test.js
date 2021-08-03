// import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

function render(reactComponent) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  act(() => {
    ReactDOM.render(reactComponent, div);
  });
  return div.firstChild;
}



test('renders succesfully', () => {
  const elem = render(
    <Router>
      <App />
    </Router>
  );

  expect(elem).toBeTruthy();
});
