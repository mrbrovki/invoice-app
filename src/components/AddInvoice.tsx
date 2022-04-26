import { FC, useContext } from 'react';
import { Context } from '../context';

//  styles
import styles from '../styles/css/add_invoice_btn.module.css';



const AddInvoice:FC = () => {
  const {dispatch} = useContext(Context);
  const openEditor = () => {
    dispatch({type: 'EDITOR', payload: 'visible'});
    dispatch({type: 'OVERLAY', payload: true});
  };
  return (
    <button className={styles.btn_container} onClick={openEditor}>
      <div className={styles.plus_icon_container}>
        <img src='/assets/icon-plus.svg' alt='plus icon'/>
      </div>
    </button>
  );
};

export default AddInvoice;