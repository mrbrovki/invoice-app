import { FC } from 'react'
import { InvoiceProps } from '../../lib/Types';
import Invoice from './Invoice';
//  styles
import styles from '../../styles/css/invoices.module.css';



const Invoices:FC<{data:InvoiceProps[]}> = ({data}) => {
 const invoices = data.map(invoice => <Invoice key={invoice.id} data={invoice}/>);
  return (
   <div className={styles.invoices_container}>
     {invoices}
   </div>
  );
};

export default Invoices;