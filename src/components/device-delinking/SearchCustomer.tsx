import React, { useState } from 'react';
import { Input, Button, Form, Space } from 'antd';

interface SearchCustomerProps {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
}

const SearchCustomer: React.FC<SearchCustomerProps> = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <div className="bg-peach p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Search Customer</h2>
      <Form layout="vertical">
        <Form.Item 
          label="Search Customer by CID / Mobile number / Username"
          className="mb-6"
        >
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
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
