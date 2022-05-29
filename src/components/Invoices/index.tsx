import React, { FC } from 'react'
import { InvoiceProps } from '../../lib/Types';
import Invoice from './Invoice';

const Invoices:FC<{data:InvoiceProps[]}> = ({data}) => {
 const invoices = data.map(invoice => <Invoice key={invoice.id} data={invoice}/>);
  return (
   <div>
     {invoices}
   </div>
  );
};

export default Invoices;