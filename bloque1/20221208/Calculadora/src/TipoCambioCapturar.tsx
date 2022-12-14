import React, { useRef, useState } from 'react'
import MonedaConvertir from "./MonedaConvertir";

const TipoCambioCapturar = () => {
    //const cambioDolar = useRef(0)
    let [cambioDolar, setCambioDolar] = useState(0)
  return (
    <div>
        <h5>Tipo Cambio de Dólar</h5>
        <p>
            Compra:
            {/* <input type="number" ref={cambioDolar} />
            <button onClick={() => alert(cambioDolar.current.value) }>
                TEST
            </button>             */}
            <input type="number" value={cambioDolar}
            onChange={(event) => setCambioDolar(event.target.value) }
             />
        </p>
        <MonedaConvertir cambioDolar={cambioDolar}/>
    </div>
  )
}

export default TipoCambioCapturar