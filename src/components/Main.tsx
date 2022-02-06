import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Context } from './pages/Layout';
import styles from '../styles/Main.module.css';
const Main = () => {
  const {mode} = useContext(Context);
  return (
   <main className={styles['main-' + mode] + ' '+ styles.main}> 
   <Header />
   <Outlet />
   </main>
  )
};

export default Main;
