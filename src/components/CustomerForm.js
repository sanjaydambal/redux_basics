import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCustomers } from '../features/customerSlice'
const CustomerForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setCustomers({ name, address }));
      setName('');
      setAddress('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    );
  };

export default CustomerForm