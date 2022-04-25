import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  context
import AppContext from '../context';
import useFetch from '../hooks/useFetch';
//  pages
import Home from '../pages/Home';
import InvoicePage from '../pages/InvoicePage';
//  components
import Layout from './Layout';
//  styles
import '../styles/css/app.css';

const App = () => {
  return (
    <AppContext>
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='username/:id' element={<InvoicePage />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </Suspense>
    </AppContext>
  );
};

export default App;