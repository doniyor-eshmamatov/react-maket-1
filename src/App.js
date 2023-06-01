import React from 'react'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/movie-details/movie-details'
import axios from 'axios';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single/:id' element={<MovieDetails />} />
        <Route path='*' element={<h1>PAGE NOT FOUND!!!</h1>} />
      </Routes>
    </div>
  )
} 
