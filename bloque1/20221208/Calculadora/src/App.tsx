import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TipoCambioCapturar from "./TipoCambioCapturar";

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Fragment>DEMO</Fragment>
    <>
      <TipoCambioCapturar/>
    </>
  )
}

export default App
