import {FC, useContext} from 'react';
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

const Invoice:FC<Props> = ({id, paymentDue, clientName, total, status}) => {
  const {mode} = useContext(Context);
  const date = new Date(paymentDue as string);
  const addComma = (num: string) =>{
   const numArr = num.split('');
   const newArr = [];
   for(let i = numArr.length - 1; i > 0; i--){
    newArr.unshift(numArr[i])
    if(i < numArr.length - 3 && (numArr.length - i) % 3 == 0){
     newArr.unshift(',')
    }
   }
   newArr.unshift(numArr[0]);
   return newArr.join('');
  };
  
  return (
    <Link to={'/invoice/' + id} className={styles.invoice + ' ' + styles['invoice-' + mode]}>
      <div className={styles.id + ' ' + styles['id-' + mode]}>
        <span>#</span>{id}
      </div>
      <p className={styles.due + ' ' + styles['due-' + mode]}>Due {date.getDate() + " " + monthArr[date.getMonth() + 1] + " " + date.getFullYear()}</p>
      <p className={styles.name + ' ' + styles['name-' + mode]}>{clientName}</p>
      <p className={styles.total + ' ' + styles['total-' + mode]}>£{addComma(total?.toFixed(2) as string)}</p>
      <div className={styles['status-container'] + ' ' + styles[status as string] + ' ' + styles[status as string + '-' + mode as string]}>
        <div className={styles.circle}></div>
        <p>{status}</p>
      </div>
      <img src='/assets/icon-arrow-right.svg'alt='arrow right' className={styles['arrow-right']}/>
    </Link>
  );
};

export default Invoice;
