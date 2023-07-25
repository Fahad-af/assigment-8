import React, { useState } from 'react'
import Index from './Index'

const Withdrawn = (props) => {
  
    const [withdrawn ,setwithdrawn]=useState("");
    const [count,setcount]=useState(0)
    
    
    
    const handelchange=e=>{
      setwithdrawn(e.target.value)
     
    }
    const handelsubmit=e=>{
      e.preventDefault()
      setcount(props.data-parseInt(withdrawn))
      setwithdrawn('')
     
     
    }
  
  return (
    <div>
      <Index/>
           <form onSubmit={handelsubmit}>
             <input type="text" value={withdrawn} onChange={handelchange} />
             <input type="submit" value='submit'/>
           </form>
           <h1>withdrawn:{withdrawn}</h1>
           <h2> your total tk:{count}</h2>
         
    </div>
  )
}

export default Withdrawn