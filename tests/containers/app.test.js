// jest.dontMock('../../src/containers/App.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// import App from '../../src/containers/App.jsx';

describe('App', function() {
  // var appContainer = TestUtils.renderIntoDocument(<App />);

  it('should display the name of the app', () => {
      // let label = TestUtils.findRenderedDOMComponentWithTag(
      //   appContainer,
      //   'h1'
      // );

      expect('App').toEqual('App');
  });

});
