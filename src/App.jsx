import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
