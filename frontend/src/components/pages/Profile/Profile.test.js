import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Profile from './Profile';
import { BrowserRouter as Router } from 'react-router-dom';

const exampleData = {

};



// A "helper function" which renders the given element in a temporary div,
// and returns the resulting DOM node. This is a helper function written by
// us, so it does not come standard with React or Jest, but it is a common
// pattern you'll see when writing React tests.
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
      <Profile />
    </Router>
  );

  expect(elem).toBeTruthy();
});

test('Contains hardcoded text', () => {
  const elem = render(
    <Router>
      <Profile />
    </Router>
  );

  expect(elem.textContent).toContain("Activities in the last month");
});


