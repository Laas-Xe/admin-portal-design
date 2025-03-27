import React, { useState } from 'react';
import { message, Typography } from 'antd';
import SearchCustomer from '../../components/device-delinking/SearchCustomer';
import CustomerCard from '../../components/device-delinking/CustomerCard';

const { Title } = Typography;

interface CustomerData {
  name: string;
  username: string;
  deviceType: string;
  phoneNumber: string;
  email: string;
  cid: string;
  status: 'Active' | 'Inactive';
}

const DeviceDeLinking: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [searchInfo, setSearchInfo] = useState<{type: string, value: string} | null>(null);

  const handleSearch = async (searchType: string, searchTerm: string) => {
    // Store search info for display purposes
    setSearchInfo({ type: searchType, value: searchTerm });
    
    // TODO: Replace with actual API call based on search type
    // Mock data for demonstration
    const mockCustomer: CustomerData = {
      name: 'Mohammad Salman',
      username: 'salman123',
      deviceType: 'iPhone 16 Pro',
      phoneNumber: '+91 992 829 1819',
      email: 'salman@gmail.com',
      cid: '8745219863',
      status: 'Active',
    };
    setCustomerData(mockCustomer);
  };

  const handleReset = () => {
    setCustomerData(null);
    setSearchInfo(null);
  };

  const handleUnlink = async () => {
    try {
      // TODO: Replace with actual API call
      message.success('Device unlinked successfully');
      setCustomerData(null);
    } catch (error) {
      message.error('Failed to unlink device');
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <Title level={2}>Device De-linking</Title>
        <div>
          <SearchCustomer onSearch={handleSearch} onReset={handleReset} />
        </div>
        {customerData && (
          <div className="mt-12">
            <Title level={4} className="mb-6">Search Results</Title>
            <CustomerCard customer={customerData} onUnlink={handleUnlink} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceDeLinking;
