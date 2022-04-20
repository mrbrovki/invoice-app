import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '../context';
import Home from '../pages/Home';
import InvoicePage from '../pages/InvoicePage';
import Layout from './Layout';


const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='username/:id' element={<InvoicePage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;