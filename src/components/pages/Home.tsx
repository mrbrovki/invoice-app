import React, {useEffect, useState} from 'react';
import styles from '../../styles/Home.module.css';
import useFetch from '../../useFetch';
import Invoice from '../Invoice';
interface Data{
  id?: String;
  paymentDue?: String;
  clientName?: String;
  total?: Number;
  status?: String;
}
const Home = () => {
  const [visibility, setVisibility] = useState('hidden');
  const [invoices, setInvoices] = useState([] as Array<JSX.Element>); 
  const data = useFetch('/data.json').data as Array<Object>;
  useEffect(()=>{
    if(data){
      setInvoices(data.map((el: Data, index)=>{
      return(<Invoice key={index} id={el.id} paymentDue={el.paymentDue} clientName={el.clientName} total={el.total} status={el.status} />)
    }));
  }
}, [data]);
  return (
    <div className={styles.home}>
      <div className={styles['f-c'] + ' ' + styles['invoices-header']}>
        <div>
          <h1>Invoices</h1>
        </div>
        <div className={styles['f-c']}>
         <div onMouseOver={()=>setVisibility('shown')} onMouseOut={()=>setVisibility('hidden')} className={styles['f-c'] + ' ' + styles['filter-by']}>
            <p></p>
            <img src='/assets/icon-arrow-down.svg' alt='arrow'/>
            <div className={styles['status-choices'] + ' ' + styles[visibility]}>
              <div>Draft</div>
              <div>Pending</div>
              <div>Paid</div>
            </div>
          </div>
          <div className={styles['new-invoice-btn'] + ' ' + styles['f-c']}>
            <div className={styles['plus-circle']}>
              <img src='/assets/icon-plus.svg' alt='plus icon'/>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      {invoices}
    </div>
  );
};

export default Home;
