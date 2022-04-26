import {createContext, Dispatch, FC, ReactNode, useReducer, Suspense} from 'react';

// types 
import { State, Action, AppContextProps } from '../lib/Types';

const initState:State = {
  filter: [],
  invoices: [],
  colorMode: 'light',
  editorVisibility: 'hidden',
  isOverlay: false,
  filterOptionsVisibility: 'hidden'
};

export const Context = createContext<{state: State, dispatch:Dispatch<Action>}>({state: initState, dispatch: () => {}});

const AppContext:FC<AppContextProps<ReactNode>> = ({children}) => {
  const reducer = <T extends State>(state: T, action: Action):T =>{
    const {type, payload} = action;
    switch(type){
      case 'FILTER':
        return {...state, filter: [...state.filter, payload]};
      case 'ADD_INVOICE':
        return state;
      case 'REMOVE_INVOICE':
        return state;
      case 'INVOICE_PAID':
        return state;
      case 'SET_INVOICES':
        return {...state, ivoices: payload};
      case 'COLOR_MODE':
        return {...state, colorMode: payload};
      case 'EDITOR':
        return {...state, editorVisibility: payload};
      case 'OVERLAY':
        return {...state, isOverlay: payload};
      case 'FILTER_OPTIONS':
        return {...state, filterOptionsVisibility: payload}
      default:
        return{...state};
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{state, dispatch}}>
     {children}
    </Context.Provider>
  );
};

export default AppContext;