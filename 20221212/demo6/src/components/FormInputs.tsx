import React, {useRef, MutableRefObject, useState} from 'react'

function FormInputs() {
    // Uncontrolled inputs
    const input1 = useRef<HTMLInputElement>(null);
    let input2 = useRef<HTMLInputElement>(null);

    // Controlled inputs
    const [input3, setInput3] = useState<string>('')

  return (
    <>
        <h5>FormInputs</h5>
        <p>
            <input type="text" ref={input1} />
            <button onClick={()=> { alert(input1.current?.value) }}>input1</button>
        </p>
        <p>
            {/* <input type="text" ref={(input) => input2 = input} />
            <button onClick={()=> { alert(input2?.value) }}>input2</button> */}
        </p>        
        <p>
            <input type="text" value={input3} 
            onChange={(event) => setInput3(event.target.value)} />
            <button onClick={()=> { alert(input3) }}>input3</button>
        </p>                
    </>
  )
}

export default FormInputs