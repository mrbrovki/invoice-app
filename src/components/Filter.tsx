import {useState, FC} from 'react'
import styles from '../styles/Filter.module.css';

interface Params{
 mode: string;
 changeFilter: Function;
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
      <div onClick={() => props.changeFilter("draft")}>Draft</div>
      <div onClick={() => props.changeFilter("pending")}>Pending</div>
      <div onClick={() => props.changeFilter("paid")}>Paid</div>
    </div>
  </div>
  )
}

export default Filter