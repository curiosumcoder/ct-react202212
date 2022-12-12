import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormInputs from './components/FormInputs'
import ProductCreate from './components/product/ProductCreate'

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
        <h1>demo6</h1>
        {/* <FormInputs/> */}
        <ProductCreate/>
      </div>
    </>
  )
}

export default App
