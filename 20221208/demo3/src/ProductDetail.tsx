import React, { useState } from 'react'

function ProductDetail({productName,unitPrice}) {
    //let name = "Sandía"
    let [name, setName] = useState("Sandía");
    //console.log(props.productName, props.unitPrice)
    console.log(productName, unitPrice)
  return (
    <div>
        ProductDetail
        <ul>
            <li>Name: {productName}, {unitPrice}</li>
        </ul>
        <button onClick={()=> {
            //name = "Piña"; 
            setName("Piña");
            console.log(name);
            }}>TEST</button>
    </div>
  )
}

export default ProductDetail