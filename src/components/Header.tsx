import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { Context } from './pages/Layout';

const Header = () => {
  const {changeMode} = useContext(Context);
  return (
   <header className={styles.header + ' '+ styles['f-c']}>
     <Link to='/'><img className={styles.logo}src='/assets/logo-group.svg' alt='logo'/></Link>
     <div className={styles['f-c'] + ' ' + styles['sun-avatar']}>
        <img onClick={() => {changeMode()}} src='/assets/icon-sun.svg' alt='change mode' className={styles.sun}/>
        <div className={styles.avatar}>
          <img className={styles['avatar-image']}src="/assets/image-avatar.jpg" alt="avatar" />
        </div>
     </div>
   </header>
  )
};

export default Header;
