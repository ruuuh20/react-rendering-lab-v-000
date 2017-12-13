require('babel-register')();

var exposedProperties = ['window', 'navigator', 'document'];

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};


//added this enzyme part because of error

import { configure } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 configure({ adapter: new Adapter() });


 // Error:
 //      Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To
 //      configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
 //      before using any of Enzyme's top level APIs, where `Adapter` is the adapter
 //      corresponding to the library currently being tested. For example:
 //
 //      import Adapter from 'enzyme-adapter-react-15';
 //
 //      To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html
