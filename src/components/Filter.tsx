import {useState, FC} from 'react'
import styles from '../styles/Filter.module.css';

interface Params{
 mode: string;
 addFilter: Function;
}

const Filter:FC<Params> = (props) => {
  const {mode} = props;
  const [visibility, setVisibility] = useState('hidden');
  return (
    <div onClick={() => 
      setVisibility(prev => prev === 'hidden' ? 'shown' : 'hidden')} 
      className={styles['f-c'] + ' ' + styles['filter-by'] + ' ' + styles['filter-' + mode]}>
    <p></p>
    <img src='/assets/icon-arrow-down.svg' alt='arrow'/>
    <div className={styles['status-choices'] + ' ' + styles['status-choices-' + mode] + ' ' + styles[visibility]}>
      <div className={styles.choice}>
        <label htmlFor='draft' className={styles.choice}>
        <input type='checkbox' id='draft' name='filter' value='draft' 
        onClick={() => props.addFilter("pending")} defaultChecked/>
          Pending
        </label>
      </div>
      <div className={styles.choice}>
        <label htmlFor='pending'>
        <input type='checkbox' id='pending' name='filter' value='pending' onClick={() => props.addFilter("draft")} defaultChecked/>
          Draft
        </label>
      </div>
      <div className={styles.choice}>
        <label htmlFor='paid'>
        <input type='checkbox' id='paid' name='filter' value='paid' onClick={() => props.addFilter("paid")} defaultChecked/>
          Paid
      </label>
      </div>
      
    </div>
  </div>
  )
}

export default Filter