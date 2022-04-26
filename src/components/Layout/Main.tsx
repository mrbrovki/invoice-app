import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Context } from '../../context';

//  styles
import styles from '../../styles/css/main.module.css';



const Main = () => {
  const {state: {colorMode}} = useContext(Context);
  return (
    <main className={styles[`main_${colorMode}`]}>
      <Outlet />
    </main>
  );
};

export default Main;