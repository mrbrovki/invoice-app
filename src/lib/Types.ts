export interface AppContextProps<T>{
 children:T;
}
type filterType = 'DRAFT'|'PENDING'|'PAID';
export interface InvoiceProps{};

export type ColorMode = 'light' | 'dark';

export interface State{
 filter: filterType[];
 invoices: InvoiceProps[];
 colorMode: ColorMode;
 editorVisibility: Visibility;
 isOverlay: boolean;
 filterOptionsVisibility: Visibility;
};

type Visibility = 'visible' | 'hidden';

export type Action =
| {type: 'FILTER', payload: filterType}
| {type: 'SET_INVOICES', payload: InvoiceProps[]}
| {type: 'COLOR_MODE', payload: ColorMode}
| {type: 'ADD_INVOICE', payload: unknown}
| {type: 'REMOVE_INVOICE', payload: unknown}
| {type: 'INVOICE_PAID', payload: unknown}
| {type: 'EDITOR', payload: Visibility}
| {type: 'OVERLAY', payload: boolean}
| {type: 'FILTER_OPTIONS', payload: Visibility}

export type FetchMethod = 'POST' | 'PUT' | 'GET';