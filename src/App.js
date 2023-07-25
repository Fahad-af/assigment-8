import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Income from './Component/Income';
import Withdrawn from './Component/Withdrawn';


const App = () => {
  return (
    <div>
         <BrowserRouter>
                        <Routes>
                                 <Route path='/' element={<Income/>}/>
                                 <Route path='/withdrawn' element={<Withdrawn/>}/>
                        </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App