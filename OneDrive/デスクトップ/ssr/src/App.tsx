const React = require('react');
require('./App.css');
const {  Router, Routes, Route } = require('react-router-dom');
const Home = require('../src/pages/Home').default;
const About = require('../src/pages/About').default;
const Error = require('../src/pages/Error').default;
const homeUrl = process.env.PUBLIC_URL;


function App() {
　　return (
　　　　<Router>
　　　　　　<Routes>
　　　　　　　　<Route path={ homeUrl } element={<Home />} />
　　　　　　　　<Route path={ homeUrl + "/about" } element={<About />} />
　　　　　　　　<Route path="*" element={<Error />} />
　　　　　　</Routes>
　　　　</Router>
　　);
}

export default App;


/*
const App = () => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">
        ${renderToString(<Home />)}
        ${renderToString(<About />)}
        ${renderToString(<Err />)}

      </div>
    </body>
  </html>
`);

export default App;
*/
/*
const React = require('react');
require('./App.css');
const { BrowserRouter, Routes, Route } = require('react-router-dom');
const Home = require('../src/pages/Home').default;
const About = require('../src/pages/About').default;
const Err = require('../src/pages/Err').default;
const homeUrl = process.env.PUBLIC_URL;


function App() {
  return (
    React.createElement(BrowserRouter, null,
      React.createElement(Routes, null,
        React.createElement(Route, { path: homeUrl, element: React.createElement(Home) }),
        React.createElement(Route, { path: homeUrl + '/about', element: React.createElement(About) }),
        React.createElement(Route, { path: '*', element: React.createElement(Err) })
      )
    )
  );
}

module.exports = App;
*/