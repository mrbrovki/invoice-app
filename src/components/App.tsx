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



const App = () => {
  const {data, error} = useFetch('https://my-json-server.typicode.com/mrbrovki/demo/invoices', 'GET');
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