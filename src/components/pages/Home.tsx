import React, {FC, useContext, useEffect, useState} from 'react';
import styles from '../../styles/Home.module.css';
import useFetch from '../../hooks/useFetch';
import Filter from '../Filter';
import Invoice from '../Invoice';
import { Context } from './Layout';

interface InvoiceData{
  id?: string;
  paymentDue?: string;
  clientName?: string;
  total?: number;
  status?: string;
}
interface FetchReturn{
  data?: InvoiceData[];
  error?: Error;
}

const Home:FC = () => {
  const {mode} = useContext(Context);
  const {data, error}:FetchReturn = useFetch('/data.json');
  const [invoices, setInvoices] = useState([] as JSX.Element[]);
  const [filter, setFilter] = useState(['paid', 'pending', 'draft'] as string[]); 
  
  const addFilter = (newFilter: string) =>{
    if(filter.includes(newFilter)){
      setFilter(prev => prev.filter(el => el !== newFilter));
    }else{
      setFilter(prev => [...prev, newFilter]);
    }
    setInvoices([]);
  };

  useEffect(()=>{
    if(!data){return;}
    data.forEach(invoice => {
        if(filter.includes(invoice.status as string)){
          setInvoices(prev => [...prev, <Invoice key={invoice.id} {...invoice}/>]);
        }        
    })
  }, [data, filter])
  return (
    <div className={styles.home}>
      <div className={styles['f-c'] + ' ' + styles['invoices-header-' + mode]}>
        <div>
          <h1>Invoices</h1>
        </div>
        <div className={styles['f-c']}>
          <Filter mode={mode as string} addFilter={(newFilter: string) => {addFilter(newFilter)}}/>
          <div className={styles['new-invoice-btn'] + ' ' + styles['f-c']}>
            <div className={styles['plus-circle']}>
              <img src='/assets/icon-plus.svg' alt='plus icon'/>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      {data !== undefined && invoices }
    </div>
  );
};

export default Home;
