export interface AppContextProps<T>{
 children:T;
}
type filterType = 'DRAFT'|'PENDING'|'PAID';
export interface InvoiceProps{};

type ColorMode = 'light' | 'dark';

export interface State{
 filter: filterType[];
 invoices: InvoiceProps[];
 colorMode: ColorMode;
};


export type Action =
| {type: 'FILTER', payload: filterType}
| {type: 'SET_INVOICES', payload: InvoiceProps[]}
| {type: 'COLOR_MODE', payload: ColorMode}
| {type: 'ADD_INVOICE', payload: unknown}
| {type: 'REMOVE_INVOICE', payload: unknown}
| {type: 'INVOICE_PAID', payload: unknown}

export type FetchMethod = 'POST' | 'PUT' | 'GET';