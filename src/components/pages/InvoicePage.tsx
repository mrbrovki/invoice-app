import React, { FC, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

interface InvoiceData{
  id?: string;
  createdAt?: string;
  paymentDue?: string;
  description?: string;
  paymentTerms?: number;
  clientName?: string;
  clientEmail?: string;
  status?: string;
  senderAdress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  clientAdress?: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  items?: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total?: number;
}

interface FetchReturn{
  data?: InvoiceData[];
  error?: Error;
}

const InvoicePage:FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data, error}:FetchReturn = useFetch('/data.json');
  const [invoicePage, setInvoicePage] = useState(<></> as JSX.Element);
  useEffect(()=>{
    if(!data){return;}
    data.filter((item)=>{
      if(item.id === id){
        setInvoicePage(<>
          
        </>)
      }
    })
  }, [data])
  return <>{invoicePage}</>;
};

export default InvoicePage;
