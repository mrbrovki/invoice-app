import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../context';
import { addComma, monthArr } from '../../../lib/constants';
//  types
import { InvoiceProps } from '../../../lib/Types';
//  styles
import styles from '../../../styles/css/invoice.module.css';

const Invoice:FC<{data: InvoiceProps}> = ({data}) => {
  const {id, paymentDue, clientName, total, status} = data;
  const date = new Date(paymentDue as string);
  const {state: {colorMode}} = useContext(Context);
  return (
    <Link to={'/invoice/' + id} className={styles[`invoice_container_${colorMode}`]}>
      <div className={styles[`id_${colorMode}`]}>
        {id}
      </div>
      <p className={styles[`due_${colorMode}`]}>Due {`${date.getDate()} ${monthArr[date.getMonth() + 1]} ${date.getFullYear()}`}</p>
      <p className={styles[`name_${colorMode}`]}>{clientName}</p>
      <p className={styles[`total_${colorMode}`]}>£{addComma(total.toFixed(2))}</p>
      <div className={styles[`status_container_${status}`]}>
        <div className={styles.circle}></div>
        <p>{status}</p>
      </div>
      <img src='/assets/icon-arrow-right.svg' alt='arrow right' className={styles.arrow}/>
    </Link>
  );
};

export default Invoice;