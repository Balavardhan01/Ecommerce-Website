import React from 'react'
import LandingPage from './stores/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'

const App = () => {
  return (
  <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
     <Route path='/mobiles' element={<MobilePage/>}/>
    </Routes>
  </>
  )
}

export default App
