import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App from './TODOLIST/App';
// import App from './LIFECIRCLE/App';
// import App from './LIFECIRCLE2/App';
// import App from './STOPWATCH/App';
// import App from './POKAMON/App';
// import App from './REACTROUTER/App';
import App from './REACTROUTEREXERCISE/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
