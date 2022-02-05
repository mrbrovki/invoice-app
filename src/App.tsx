import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import InvoicePage from './components/pages/InvoicePage';
//styles
import './App.css';

const App = () => {

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
