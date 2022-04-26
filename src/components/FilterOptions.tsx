import { FC, useContext } from "react";
import { Context } from "../context";
import { ColorMode } from "../lib/Types";

// styles
import styles from '../styles/css/filter_options.module.css';



const FilterOptions:FC<{colorMode: ColorMode}> = ({colorMode}) => {
 const {state:{filterOptionsVisibility}, dispatch} = useContext(Context);

  return (
    <form>
     <fieldset className={styles[`options_container_${colorMode}`] + ' ' + styles[filterOptionsVisibility]}>
      <label htmlFor="draft" className={styles.option}>
       <input type={'checkbox'} id='draft' className={styles[`checkbox_${colorMode}`]}/>
       <span className={styles.checkmark}></span>
       <span className={styles[`status_type_${colorMode}`]}>draft</span>
      </label>
      <label htmlFor="pending" className={styles.option}>
       <input type={'checkbox'} id='pending' className={styles[`checkbox_${colorMode}`]}/>
       <span className={styles.checkmark}></span>
       <span className={styles[`status_type_${colorMode}`]}>pending</span>
      </label>
      <label htmlFor="paid" className={styles.option}>
       <input type={'checkbox'} id='paid' className={styles[`checkbox_${colorMode}`]}/>
       <span className={styles.checkmark}></span>
       <span className={styles[`status_type_${colorMode}`]}>paid</span>
      </label>
     </fieldset>
    </form>
  );
};

export default FilterOptions;