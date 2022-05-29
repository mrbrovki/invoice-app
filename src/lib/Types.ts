export interface AppContextProps<T>{
 children:T;
}
type InvoiceStatus = 'paid' | 'pending' | 'draft';
interface Adress {
 street: string;
 city: string;
 postCode: string;
 country: string;
};
interface Item{
 name: string;
 quantity: number;
 price: number;
 total: number;
};

export interface InvoiceProps{
 id: string;
 createdAt: string;
 paymentDue: string;
 description: string;
 paymentTerms: number;
 clientName: string;
 clientEmail: string;
 status: InvoiceStatus;
 senderAddress: Adress;
 clientAddress: Adress;
 items: Item[];
 total: number;
};

export type ColorMode = 'light' | 'dark';
export type FilterType = 'ALL' | 'DRAFT' | 'PENDING' | 'PAID';
export interface State{
 filter: {
  draft: boolean;
  pending: boolean;
  paid: boolean;
 };
 invoices: InvoiceProps[];
 colorMode: ColorMode;
 editorVisibility: Visibility;
 isOverlay: boolean;
 filterOptionsVisibility: Visibility;
};

type Visibility = 'visible' | 'hidden';

export type Action =
| {type: 'FILTER', payload: FilterType}
| {type: 'SET_INVOICES', payload: InvoiceProps[]}
| {type: 'COLOR_MODE', payload: ColorMode}
| {type: 'ADD_INVOICE', payload: unknown}
| {type: 'REMOVE_INVOICE', payload: unknown}
| {type: 'INVOICE_PAID', payload: unknown}
| {type: 'EDITOR', payload: Visibility}
| {type: 'OVERLAY', payload: boolean}
| {type: 'FILTER_OPTIONS', payload: Visibility}

export type FetchMethod = 'POST' | 'PUT' | 'GET';