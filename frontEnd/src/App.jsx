import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeLayOut from './layouts/HomeLayOut';
import COA from './pages/COA';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Politicas from './pages/Politicas';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayOut />}>
            <Route index element={< Home />} />
            <Route path='servicios' element={<Servicios/>} />
            <Route path='coa' element={<COA/>} />
            <Route path='contacto' element={<Contacto/>} />
            <Route path='politicas' element={<Politicas/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
