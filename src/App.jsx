import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/HomeC';
import EbookSalesPage from './page/vendaPage/VendaPage1';
import DoacaoHelp from './page/Dog';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<EbookSalesPage />} />
          <Route path="/dogs" element={<DoacaoHelp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
