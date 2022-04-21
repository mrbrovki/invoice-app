import { useEffect, useReducer} from "react";
import { FetchMethod } from "../lib/Types";


interface State<T>{
 data?: T;
 error?: Error;
};

type Action<T> = 
| {type: 'FETCHING'}
| {type: 'FETCHED', payload?: T}
| {type: 'ERROR', payload: Error};

const useFetch = <T = unknown> (url:string, method: FetchMethod, invoice?: object) => {
 const initState: State<T> = {data: undefined, error: undefined};
 const reducer = (state: State<T>, action: Action<T>): State<T> =>{
   switch(action.type){
     case 'FETCHING':
       return state
     case "FETCHED":
       return {...state, data: action.payload}
     case 'ERROR':
       return {...state, error: action.payload};
     default:
       return state;
   }
 };
 const [state, dispatch] = useReducer(reducer, initState);
 useEffect(() => {
   const fetchData = async () => {
    dispatch({type: 'FETCHING'});
    switch(method){
     case 'GET':
      try{
       const getResponse = await fetch(url, {
        method,
        headers: {'Content-Type': 'application/json; charset=utf-8'}
       });
       dispatch({type: 'FETCHED', payload: await getResponse.json()});
      }
      catch(err){
       dispatch({type: 'ERROR', payload: err as Error});
      }
      break;
     case 'POST':
      try{
       const postResponse = await fetch(url, {
        method,
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(invoice)
       });
       dispatch({type: 'FETCHED'});
      }
      catch(err){
       dispatch({type: 'ERROR', payload: err as Error});
      }
      break;
     case 'PUT':
      try{
       const putResponse = await fetch(url, {
        method,
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify(invoice)
       });
       dispatch({type: 'FETCHED'});
      }
      catch(err){
       dispatch({type: 'ERROR', payload: new Error('put failed!')});
      }
      break;
     default:
      console.log('huh?');
      break;
    }
   };
   fetchData();
  }, [url]);
  return state;
 };

export default useFetch;
