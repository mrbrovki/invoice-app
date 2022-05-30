import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../context';
import useFetch from '../hooks/useFetch';
import { addComma, monthArr } from '../lib/constants';
import { InvoiceProps } from '../lib/Types';
//  styles
import styles from '../styles/css/invoice_page.module.css';

const InvoicePage = () => {
  const navigate = useNavigate();
  const {id} = useParams<string>();
  const {state:{colorMode}} = useContext(Context);
  const {data, error} = useFetch<InvoiceProps[]>('/data.json', 'GET')
  const [invoice, setInvoice] = useState<InvoiceProps>();
  const createDate = new Date(invoice?.createdAt as string);
  const dueDate = new Date(invoice?.paymentDue as string);
  
  useEffect(()=>{
    if(!data) return;
    setInvoice(data.find(invoice => invoice.id === id))
  }, [data]);
  console.log('render')

  return (
    <div className={styles.page_container}>
      <div className={styles[`btn_container_${colorMode}`]}>
        <img src='/assets/icon-arrow-left.svg' alt='arrow left' className={styles.arrow}/>
        <button onClick={()=>{navigate(-1)}}>go back</button>
      </div>
      <header className={styles[`header_container_${colorMode}`]}>

      </header>     
      <section className={styles[`invoice_container_${colorMode}`]}>
        <div className={styles.id}>
          <span className={styles.big}>{invoice?.id}</span>
          <p>{invoice?.description}</p>
        </div>
        <address className={styles.sender_adress}>
          <div>{invoice?.senderAddress.street}</div>
          <div>{invoice?.senderAddress.city}</div>
          <div>{invoice?.senderAddress.postCode}</div>
          <div>{invoice?.senderAddress.country}</div>
        </address>
        <div className={styles.create_date_container}>
          <p>Invoice Date</p>
          <p className={styles.big}>{`${createDate.getDate()} ${monthArr[createDate.getMonth() + 1]} ${createDate.getFullYear()}`}</p>
        </div>
        <div className={styles.due_date_container}>
          <p>Payment Due</p>
          <p className={styles.big}>{`${dueDate.getDate()} ${monthArr[dueDate.getMonth() + 1]} ${dueDate.getFullYear()}`}</p>
        </div>
        <div className={styles.bill_to_container}>
          <p>Bill To</p>
          <p className={styles.big}>{invoice?.clientName}</p>
          <address>
            <div>{invoice?.clientAddress.street}</div>
            <div>{invoice?.clientAddress.city}</div>
            <div>{invoice?.clientAddress.postCode}</div>
            <div>{invoice?.clientAddress.country}</div>
          </address>
        </div>
        <div className={styles.sent_to}>
          <p>Sent To</p>
          <p className={styles.big}>{invoice?.clientEmail}</p>
        </div>
        <section className={styles.total_container}>
          <div className={styles.items_container}>
            <table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>QTY.</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice?.items.map(item => {
                    return(
                        <tr key={id+item.name}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>£{addComma(item.price.toFixed(2) as string)}</td>
                          <td>£{addComma((item.price * item.quantity).toFixed(2) as string)}</td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>
          </div>
          <div className={styles.amount_due_container}>
            <p>Amount Due</p>
            <p className={styles.total}>£{addComma(invoice?.total.toFixed(2) as string)}</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default InvoicePage;