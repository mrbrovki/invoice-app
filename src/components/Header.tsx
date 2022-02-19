import {FC, useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { Context } from './pages/Layout';

const Header:FC = () => {
  const {mode, changeMode} = useContext(Context);
  const [modeIcon, setModeIcon] = useState('moon');
  useEffect(()=>{
    setModeIcon(prev => prev === 'sun' ? 'moon' : 'sun');
  }, [mode])
  return (
   <header className={styles.header + ' '+ styles['f-c']}>
     <Link to='/'><img className={styles.logo} src='/assets/logo-group.svg' alt='logo'/></Link>
     <div className={styles['f-c'] + ' ' + styles['mode-avatar']}>
        <img onClick={() => {changeMode()}} src={'/assets/icon-' + modeIcon + '.svg'} alt='change mode' className={styles['mode-icon']}/>
        <div className={styles.avatar}>
          <img className={styles['avatar-image']}src="/assets/image-avatar.jpg" alt="avatar" />
        </div>
     </div>
   </header>
  )
};

export default Header;
