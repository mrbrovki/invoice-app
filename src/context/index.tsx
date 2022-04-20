import {createContext, Dispatch, FC, ReactNode, useReducer} from 'react';

// types 
import { State, Action, AppContextProps } from '../lib/Types';

const initState:State = {
 filter: []
};

export const Context = createContext<{state: State, dispatch:Dispatch<Action>}>({state: initState, dispatch: () => {}});



const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
 const reducer = <T extends State>(state: T, action: Action):T =>{
  const {type, payload} = action;
  switch(type){
   case 'FILTER':
    return {...state, filter: [...state.filter, payload]};
   default:
    return{...state};
  }
 };
 const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{state, dispatch}}>
     {children}
    </Context.Provider>
  )
}

export default AppContext;