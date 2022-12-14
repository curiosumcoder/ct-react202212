import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductMaintenance from './components/product/ProductMaintenance'
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: "1em" }}>
        <Outlet />
      </main>
    </>
  )
}

export default App
