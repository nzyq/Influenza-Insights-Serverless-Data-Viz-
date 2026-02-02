import React from 'react';
import './Inbox.css';
import './Style.css';

export const Inbox = (props) => {
  const invoices = [
    {
      id: 1,
      sender: 'Acme Inc.',
      amount: '$100',
      date: '2022-04-17',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      sender: 'XYZ Corp.',
      amount: '$50',
      date: '2022-04-16',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      sender: 'ABC Ltd.',
      amount: '$75',
      date: '2022-04-15',
      message: 'Sed non mauris vitae erat consequat auctor eu in elit.',
    },
  ];

  return (
    <div className="inbox">
      <h1 className="large-text-white" >Inbox
      </h1>
      <div className="invoices">
        {invoices.map(invoice => (
          <div className="invoice" key={invoice.id}>
            <div className="invoice-header">
              <div className="sender">{invoice.sender}</div>
              <div className="amount">{invoice.amount}</div>
              <div className="date">{invoice.date}</div>
            </div>
            <div className="message">{invoice.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
