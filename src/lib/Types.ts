export interface AppContextProps<T>{
 children:T;
}
type filterType = 'DRAFT'|'PENDING'|'PAID';

export interface State{
 filter: Array<filterType>
};

export type Action =
| {type: 'FILTER', payload: filterType}