
import './App.css'
import Hamepage from './hamepage';
import Success from './landingpage/cart/success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Errors } from './404';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hamepage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
