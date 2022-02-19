import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InvoicePage:FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)
  return <div></div>;
};

export default InvoicePage;
