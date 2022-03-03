import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from '../page/Contact.jsx';
import News from '../page/News';
import Login from '../components/Login/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}
