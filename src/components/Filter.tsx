import { FC, useContext } from 'react';
import { Context } from '../context';
import { ColorMode } from '../lib/Types';

//  styles
import styles from '../styles/css/filter.module.css';
import FilterOptions from './FilterOptions';



const Filter:FC<{colorMode: ColorMode}> = ({colorMode}) => {
  const {state: {filterOptionsVisibility}, dispatch} = useContext(Context);

  const toggleOptions = () => {
    switch(filterOptionsVisibility){
      case 'visible':
        dispatch({type: 'FILTER_OPTIONS', payload: 'hidden'});
        break;
      case 'hidden':
        dispatch({type: 'FILTER_OPTIONS', payload: 'visible'});
        break;
      default:
        break;
    }
  }
  return (
    <div className={styles[`filter_container_${colorMode}`]} onClick={toggleOptions}>
      <div className={styles.arrow_icon_container}>
        <img src='/assets/icon-arrow-down.svg' alt='arrow down' />
      </div>
      <FilterOptions colorMode={colorMode}/>
    </div>
  );
};

export default Filter;