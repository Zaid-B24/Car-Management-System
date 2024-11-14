import './App.css'
import CarDetails from './pages/CarDetails'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<CarDetails /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
