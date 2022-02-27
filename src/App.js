import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './page/Home.jsx';
import News from './page/News.jsx';
import Contact from './page/Contact.jsx';
import Narbar from './components/Navbar/Narbar';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Narbar />
      <Todos />
    </div>
  );
}

export default App;
