import React from 'react'
import { useSelector } from 'react-redux'

const CustomerInfo = () => {
    const customers = useSelector((state) => state.customer.customers);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.name} - {customer.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerInfo