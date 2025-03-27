import React, { useState } from 'react';
import { Input, Button, Form, Space, message } from 'antd';

interface SearchCustomerProps {
  onSearch: (searchType: string, searchTerm: string) => void;
  onReset: () => void;
}

const SearchCustomer: React.FC<SearchCustomerProps> = ({ onSearch, onReset }) => {
  const [cidValue, setCidValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [activeField, setActiveField] = useState<'cid' | 'mobile' | 'username' | null>(null);

  const handleSearch = () => {
    if (!cidValue && !mobileValue && !usernameValue) {
      message.error('Please enter a search value in one of the fields');
      return;
    }

    if (cidValue) {
      onSearch('cid', cidValue);
    } else if (mobileValue) {
      onSearch('mobile', mobileValue);
    } else if (usernameValue) {
      onSearch('username', usernameValue);
    }
  };

  const handleReset = () => {
    setCidValue('');
    setMobileValue('');
    setUsernameValue('');
    setActiveField(null);
    onReset();
  };

  const handleCidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && activeField && activeField !== 'cid') {
      // Clear other fields if this field has value and wasn't previously active
      setMobileValue('');
      setUsernameValue('');
    }
    
    setCidValue(value);
    if (value) {
      setActiveField('cid');
    } else if (activeField === 'cid') {
      setActiveField(null);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && activeField && activeField !== 'mobile') {
      // Clear other fields if this field has value and wasn't previously active
      setCidValue('');
      setUsernameValue('');
    }
    
    setMobileValue(value);
    if (value) {
      setActiveField('mobile');
    } else if (activeField === 'mobile') {
      setActiveField(null);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && activeField && activeField !== 'username') {
      // Clear other fields if this field has value and wasn't previously active
      setCidValue('');
      setMobileValue('');
    }
    
    setUsernameValue(value);
    if (value) {
      setActiveField('username');
    } else if (activeField === 'username') {
      setActiveField(null);
    }
  };

  return (
    <div className="bg-peach p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Search Customer</h2>
      <Form layout="vertical">
        <Form.Item 
          label="Search Customer by CID"
          className="mb-4"
        >
          <Input
            value={cidValue}
            onChange={handleCidChange}
            className="w-full"
            placeholder="Enter Customer CID"
          />
        </Form.Item>
        
        <Form.Item 
          label="Search Customer by Mobile Number"
          className="mb-4"
        >
          <Input
            value={mobileValue}
            onChange={handleMobileChange}
            className="w-full"
            placeholder="Enter Mobile Number"
          />
        </Form.Item>
        
        <Form.Item 
          label="Search Customer by Username"
          className="mb-6"
        >
          <Input
            value={usernameValue}
            onChange={handleUsernameChange}
            className="w-full"
            placeholder="Enter Username"
          />
        </Form.Item>
        
        <div className="flex justify-end">
          <Space size={16}>
            <Button onClick={handleReset}>RESET</Button>
            <Button type="primary" onClick={handleSearch}>
              SEARCH
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default SearchCustomer;
