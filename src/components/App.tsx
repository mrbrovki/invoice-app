import {FC} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Layout from './pages/Layout';
import InvoicePage from './pages/InvoicePage';
//styles
import '../styles/App.module.css';

const App:FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='invoice/:id' element={<InvoicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
