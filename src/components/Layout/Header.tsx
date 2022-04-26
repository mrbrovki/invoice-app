import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

//  styles
import styles from '../../styles/css/header.module.css';



const Header = () => {
  const {state: {colorMode}, dispatch} = useContext(Context);
  const changeColorMode = () => {
    if(colorMode === 'light'){
      dispatch({type: 'COLOR_MODE', payload: 'dark'});
    }
    else{
      dispatch({type: 'COLOR_MODE', payload: 'light'})
    }
  };
  const reloadContent = () => {
    dispatch({type: 'EDITOR', payload: 'hidden'});
    dispatch({type: 'OVERLAY', payload: false});
  };
  return (
    <header className={styles.header_container}>
      <div className={styles.logo}>
        <Link to='/' onClick={reloadContent}>
          <img src='/assets/logo-group.svg' alt='logo' className={styles.logo_image}/>
        </Link>
      </div>
      <div className={styles.avatar_colorMode_container}>
        <div onClick={changeColorMode} className={styles.colorModeBtn}>
          <img src={`/assets/icon-${colorMode}.svg`} alt='color mode icon'/>
        </div>
        <div className={styles.avatar_container}>
          <img src='/assets/image-avatar.jpg' alt='avatar' />
        </div>
      </div>
    </header>
  );
};

export default Header;