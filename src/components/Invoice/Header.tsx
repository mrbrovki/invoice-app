import React, { useContext } from 'react'
import { Context } from '../../context';
// styles
import styles from '../../styles/css/invoice_header.module.css';
import AddInvoice from '../AddInvoice';
import Filter from '../Filter';

const Header = () => {
 const {state: {colorMode}} = useContext(Context);
 return (
  <div className={styles.header_container}>
   <div className={styles.left_container}>
    <h1 className={styles[`heading_${colorMode}`]}>Invoices</h1>
    <p className={styles[`total_invoices_${colorMode}`]}>There are {8} total invoices</p>
   </div>
   <div className={styles.right_container}>
    <Filter colorMode={colorMode}/>
    <AddInvoice />
   </div>
  </div>
 );
};

export default Header;