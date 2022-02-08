import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from './pages/Layout';
import { monthArr } from '../monthArr';
//styles
import styles from '../styles/Invoice.module.css';

interface Props{
  id?: string;
  paymentDue?: string;
  clientName?: string;
  total?: number;
  status?: string;
};

const Invoice = ({id, paymentDue, clientName, total, status}: Props) => {
  const {mode} = useContext(Context);
  const date = new Date(paymentDue as string);

  return (
    <Link to={'/invoice/' + id} className={styles.invoice + ' ' + styles['invoice-' + mode]}>
      <div className={styles.id + ' ' + styles['id-' + mode]}>
        <span>#</span>{id}
      </div>
      <p className={styles.due + ' ' + styles['due-' + mode]}>{date.getDate() + " " + monthArr[date.getMonth() + 1] + " " + date.getFullYear()}</p>
      <p className={styles.name + ' ' + styles['name-' + mode]}>{clientName}</p>
      <p className={styles.total + ' ' + styles['total-' + mode]}>£{total}</p>
      <div className={styles['status-container'] + ' ' + styles[status as string] + ' ' + styles[status as string + '-' + mode as string]}>
        <div className={styles.circle}></div>
        <p>{status}</p>
      </div>
      <img src='/assets/icon-arrow-right.svg'alt='arrow right' className={styles['arrow-right']}/>
    </Link>
  );
};

export default Invoice;
