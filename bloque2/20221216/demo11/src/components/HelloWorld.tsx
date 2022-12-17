import React from 'react'

function HelloWorld({children}:any) {
  return (
    <>  
        <h5>HelloWorld</h5>
        <div>{children}</div>
    </>
  )
}

export default HelloWorld