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
 editorVisibility: EditorVisibility;
 isOverlay: boolean;
};

type EditorVisibility = 'visible' | 'hidden';

export type Action =
| {type: 'FILTER', payload: filterType}
| {type: 'SET_INVOICES', payload: InvoiceProps[]}
| {type: 'COLOR_MODE', payload: ColorMode}
| {type: 'ADD_INVOICE', payload: unknown}
| {type: 'REMOVE_INVOICE', payload: unknown}
| {type: 'INVOICE_PAID', payload: unknown}
| {type: 'EDITOR', payload: EditorVisibility}
| {type: 'OVERLAY', payload: boolean}

export type FetchMethod = 'POST' | 'PUT' | 'GET';