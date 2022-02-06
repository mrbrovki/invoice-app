import React, {createContext} from 'react';
import Main from '../Main';
import useColorMode from '../../useColorMode';
interface ContextInit{
  mode: String;
  changeMode: Function;
}
export const Context = createContext({} as ContextInit);
const Layout = () => {
 const {mode, changeMode} = useColorMode('light');
  return (
   <>
   <Context.Provider value={{mode, changeMode}} >
    <Main/>
   </Context.Provider>
   </>
  );
};

export default Layout;
