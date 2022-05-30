import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Invoices/Header';
import Invoices from '../components/Invoices';
import Loading from '../components/Loading';
import { Context } from '../context';
import useFetch from '../hooks/useFetch';
import { InvoiceProps } from '../lib/Types';

const Home = () => {
  const {state:{filter}, dispatch} = useContext(Context);
  const {data, error} = useFetch<InvoiceProps[]>('/data.json', 'GET')
  const [filteredInvoices, setFilteredInvoices] = useState(data);
  const filterInvoices = () => {
    setFilteredInvoices(data?.filter(invoice => filter[invoice.status] === true));
  };
  useEffect(()=>{
    if(!data) return;
    dispatch({type: 'SET_INVOICES', payload: data});
  }, [data]);

  return (
    <>
      <Header />
      {data? <Invoices data={data}/> : <Loading />}
    </>
  );
};

export default Home