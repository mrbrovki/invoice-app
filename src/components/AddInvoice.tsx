import { useContext } from 'react';
import { Context } from '../context';
//  styles
import styles from '../styles/css/add_invoice_btn.module.css';



const AddInvoice = () => {
  const {dispatch} = useContext(Context);
  const openEditor = () => {
    dispatch({type: 'EDITOR', payload: 'visible'});
    dispatch({type: 'OVERLAY', payload: true});
  };
  return (
    <button className={styles.btn_container} onClick={openEditor}>
      <img className={styles.plus_icon} src='/assets/icon-plus.svg' alt='plus icon'/>
      <span className={styles.new_invoice_text}>
        New Invoice
      </span>
    </button>
  );
};

export default AddInvoice;