import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, RouterProvider } from 'react-router-dom';
import './global.css';
import Home from './pages/Home';
import Details  from './pages/Details';
import Search from './pages/search';
import Player from './pages/player';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/search' element={<Search/>}/>
      <Route path="/details/:media/:id" element={<Details/>}/>
      <Route path='/player/:media/:imdb_id' element={<Player/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);