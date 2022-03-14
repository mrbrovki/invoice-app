import React, { FC, useEffect, useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/InvoicePage.module.css';
import { addComma } from '../Invoice';
import { Context } from './Layout';

interface InvoiceData{
  id?: string;
  createdAt?: string;
  paymentDue?: string;
  description?: string;
  paymentTerms?: number;
  clientName?: string;
  clientEmail?: string;
  status?: string;
  senderAdress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  clientAdress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  items?: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total?: number;
}

interface FetchReturn{
  data?: InvoiceData[];
  error?: Error;
}

const InvoicePage:FC = () => {
  const {mode} = useContext(Context);
  const navigate = useNavigate();
  const {id} = useParams();
  const {data, error}:FetchReturn = useFetch('/data.json');
  const [invoicePage, setInvoicePage] = useState({} as InvoiceData);
  useEffect(()=>{
    if(!data){return;}
    data.filter((el: InvoiceData)=>{
      if(el.id === id){
        setInvoicePage(el);
      }
    })
  }, [data]);
  return <div className={styles['invoice_container']}>
    <section className={styles['invoice_header_' + mode]}>
      <p className={styles.status}>Status</p>
      <div className={styles['status-container'] + ' ' + styles[invoicePage.status as string] + ' ' + styles[invoicePage.status as string + '-' + mode as string]}>
        <div className={styles.circle}></div>
        <p>{invoicePage.status}</p>
      </div>
    </section>
    <section className={styles['invoice_info_' + mode]}>
      <section className={styles.items_container}>
        <div className={styles.items}>
          <p style={{textAlign: 'left'}}>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
          {invoicePage?.items?.map(item =>{
          return(
            <div className={styles.item}>
              <p style={{textAlign: 'left'}}>{item.name}</p>
              <p>{item.quantity}</p>
              <p>£{item.price.toFixed(2)}</p>
              <p>£{item.total.toFixed(2)}</p>
            </div>
          )
        })}
        </div>
        <div className={styles.amount_container}>
          Amount Due
        </div>
      </section>
    </section>
  </div>;
};

export default InvoicePage;
