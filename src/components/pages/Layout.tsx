import {createContext, FC} from 'react';
import Main from '../Main';
import Header from '../Header';
import useColorMode from '../../hooks/useColorMode';
interface ContextInit{
  mode: string;
  changeMode: Function;
}
export const Context = createContext({} as ContextInit);
const Layout:FC = () => {
 const {mode, changeMode} = useColorMode('light');
  return (
   <>
   <Context.Provider value={{mode, changeMode}} >
      <Header />
      <Main/>
   </Context.Provider>
   </>
  );
};

export default Layout;
