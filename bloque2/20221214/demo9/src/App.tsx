import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductMaintenance from './components/product/ProductMaintenance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "1em" }}>
        <ProductMaintenance/>
      </div>
    </>
  )
}

export default App
