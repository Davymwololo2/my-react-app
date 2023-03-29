import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';

const myFirstElement =<>
 <h1>Hello React! David</h1>
 <About/>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);