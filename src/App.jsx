import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddKinkun from './pages/AddKinkun'
import EditKinkun from './pages/EditKinkun'
import ShowAllKinkun from './pages/ShowAllKinkun'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addkinkun" element={<AddKinkun />} />
          <Route path="/editkinkun" element={<EditKinkun />} />
          <Route path="/showallkinkun" element={<ShowAllKinkun />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
