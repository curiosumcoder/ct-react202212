import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProductDetail from "./ProductDetail";
import './App.css'

function App() {
  return (
    <div>
      <h1>React</h1>
      <ProductDetail productName="Sandía" unitPrice="100"/>
    </div>
  )
}

export default App