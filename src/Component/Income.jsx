import React, { useState } from 'react'
import Index from './Index'
import Withdrawn from './Withdrawn';

const Income = () => {
  const [money,setmoney]=useState('')
  const [count,setcount]=useState(0)
  const handelchange=(e)=>{
    setmoney(e.target.value)
    
  }
  const handelsubmit=(e)=>{
    e.preventDefault()
   setcount(parseInt(money)+count)
   setmoney('')
  }
  return (
    <div>
          <Index />
     <center>Add Money</center>
           <form action="" onSubmit={handelsubmit}>
              <input type="text" name='money' value={money} onChange={handelchange} />
              <input type="submit" value='submit' />
           </form>
          <center> <h1>Total:{count}</h1></center>
          <Withdrawn data={count}/>
    </div>
  )
}

export default Income