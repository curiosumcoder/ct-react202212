import React, { useState } from "react";

function MonedaConvertir({ cambioDolar }) {
  let [dolaresCompra, setDolaresCompra] = useState(0);

  return (
    <div>
      {cambioDolar}
      <h5>Dólares a comprar</h5>
      <p>
        <input
          type="number"
          value={dolaresCompra}
          onChange={(event) => setDolaresCompra(event.target.value)}
        />
        <strong>Monto en Colones: {cambioDolar*dolaresCompra}</strong>
      </p>
    </div>
  );
}

export default MonedaConvertir;
