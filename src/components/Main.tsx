import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from './pages/Layout';
import styles from '../styles/Main.module.css';
const Main = () => {
  const {mode} = useContext(Context);
  return (
   <main className={styles['main-' + mode] + ' '+ styles.main}> 
   <Outlet />
   </main>
  )
};

export default Main;
