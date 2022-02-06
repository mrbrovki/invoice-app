import React, {useState} from 'react';
import styles from '../../styles/Home.module.css';

const Home = () => {
  const [visibility, setVisibility] = useState('hidden');
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
    </div>
  );
};

export default Home;
