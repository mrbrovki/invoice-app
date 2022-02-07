import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Invoice.module.css';
import { Context } from './pages/Layout';
interface Props{
  id?: String;
  paymentDue?: String;
  clientName?: String;
  total?: Number;
  status?: String;

}
const Invoice = (props: Props) => {
  const {id, paymentDue, clientName, total, status} = props;
  const {mode} = useContext(Context);
  return (
    <Link to={'/invoice/' + id} className={styles.invoice + ' ' + styles['invoice-' + mode]}>
      <div className={styles.id + ' ' + styles['id-' + mode]}>
        <span>#</span>
        {id}</div>
      <p className={styles.due}>{paymentDue}</p>
      <p className={styles.name}>{clientName}</p>
      <p className={styles.total + ' ' + styles['total-' + mode]}>£{total}</p>
      <div className={styles['status-container'] + ' ' + styles[status as KeyType]}>
        <div className={styles.circle + ' ' + styles['circle-' + status]}></div>
        <p>{status}</p>
      </div>
      <img src='/assets/icon-arrow-right.svg'alt='arrow right' className={styles['arrow-right']}/>
    </Link>
  );
};

export default Invoice;
