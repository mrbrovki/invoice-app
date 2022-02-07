import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Invoice.module.css';
interface Props{
  id?: String;
  paymentDue?: String;
  clientName?: String;
  total?: Number;
  status?: String;
}
const Invoice = (props: Props) => {
  const {id, paymentDue, clientName, total, status} = props;
  return (
    <Link to={'/invoice/' + id} className={styles.invoice}>
      <div>#{id}</div>
      <p>{paymentDue}</p>
      <p>{clientName}</p>
      <p className={styles.total}>£{total}</p>
      <div className={styles['status-container'] + ' ' + styles['light']}>
        <div className={styles.circle}></div>
        <p>{status}</p>
      </div>
      <img src='/assets/icon-arrow-right.svg'alt='arrow right' className={styles['arrow-right']}/>
    </Link>
  );
};

export default Invoice;
