import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import ListBooks from '../Pages/ListBooks'

const RoutesPage = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-books" element={<ListBooks />} />
      </Routes>
  )
}

export default RoutesPage