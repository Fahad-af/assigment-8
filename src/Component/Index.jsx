import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
           <Link to='/'>Money</Link>
           <Link to='/withdrawn'>Withdrawn</Link>
    </div>
  )
}

export default Index