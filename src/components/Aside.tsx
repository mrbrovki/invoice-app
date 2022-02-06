import React, {useContext, useEffect} from 'react';
import styles from '../styles/Aside.module.css';
import { Context } from './pages/Layout';

const Aside = () => {
  const {changeMode} = useContext(Context);
  return (
   <aside className={styles.aside}>
    <button onClick={() => {changeMode()}}>change mode</button>
   </aside>
  )
};

export default Aside;
