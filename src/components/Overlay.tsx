import {FC, useContext} from 'react';
import { Context } from '../context';

// styles
import styles from '../styles/css/overlay.module.css';



const Overlay:FC = () => {
 const {state: {isOverlay}, dispatch} = useContext(Context);
 const closeEditor = () => {
  dispatch({type: 'EDITOR', payload: 'hidden'});
  dispatch({type: 'OVERLAY', payload: false});
 };
 return(
  <>
   {isOverlay && <div className={styles.overlay} onClick={closeEditor}></div>}
  </>
 );
};

export default Overlay;