import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { hydrateRoot } from "react-dom/client";

const container = document.getElementById('root') as HTMLElement;
hydrateRoot(container, <App />);

reportWebVitals();
/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
import express from 'express';
import ssr from './src/ssr';

const app = express();

// 3000番ポートでWebサーバを立てる
app.listen(3000);

// https://localhost:3000 にアクセスがあったら ssr() を返す
app.get('/', (_, res) => {
  res.send(ssr());
});
*/
/*
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); 
root.render(<App />);

reportWebVitals();
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

