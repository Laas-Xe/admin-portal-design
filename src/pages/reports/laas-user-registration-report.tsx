import React from 'react';
import {
  Card,
  Typography,
  Table,
  theme,
  Tag,
  Space,
  Button
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface LaasUserRegistrationRecord {
  customerId: string;
  username: string;
  domain: string;
  mobileNumber: string;
  customerFullName: string;
  noOfCards: string;
  linkedCards: string;
  customerPreference: string;
  appRegistrationStatus: string;
  appRegisteredDevice: string;
  deviceId: string;
  deviceOs: string;
  pushNotificationEnabled: string;
}

export const LaasUserRegistrationReport: React.FC = () => {
  const { token } = theme.useToken();

  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
      width: 120,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      width: 120,
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
      width: 100,
    },
    {
      title: 'Mobile number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
      width: 120,
    },
    {
      title: 'Customer Full Name',
      dataIndex: 'customerFullName',
      key: 'customerFullName',
      width: 150,
    },
    {
      title: 'No of Cards',
      dataIndex: 'noOfCards',
      key: 'noOfCards',
      width: 100,
    },
    {
      title: 'Linked Cards',
      dataIndex: 'linkedCards',
      key: 'linkedCards',
      width: 150,
    },
    {
      title: 'Customer Preference',
      dataIndex: 'customerPreference',
      key: 'customerPreference',
      width: 150,
    },
    {
      title: 'App registration',
      dataIndex: 'appRegistrationStatus',
      key: 'appRegistrationStatus',
      width: 130,
      render: (status: string) => (
        <Tag color={status === 'Completed' ? 'green' : status === 'Initiated' ? 'blue' : 'default'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'App registered',
      dataIndex: 'appRegisteredDevice',
      key: 'appRegisteredDevice',
      width: 120,
    },
    {
      title: 'Device Id',
      dataIndex: 'deviceId',
      key: 'deviceId',
      width: 200,
    },
    {
      title: 'Device OS',
      dataIndex: 'deviceOs',
      key: 'deviceOs',
      width: 120,
    },
    {
      title: 'Push Notification Enabled',
      dataIndex: 'pushNotificationEnabled',
      key: 'pushNotificationEnabled',
      width: 120,
      render: (enabled: string) => (
        <Tag color={enabled === 'TRUE' ? 'green' : 'red'}>
          {enabled}
        </Tag>
      ),
    },
  ];

  const mockData: LaasUserRegistrationRecord[] = [
    {
      customerId: '29888179',
      username: 'manan123',
      domain: 'ADCB',
      mobileNumber: '553298802',
      customerFullName: 'Ben Buck',
      noOfCards: '3',
      linkedCards: '5650(CC), 2(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '91947f56-49',
      deviceOs: 'ANDROID',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '23789142',
      username: 'robdev',
      domain: 'ADCB',
      mobileNumber: '553230871',
      customerFullName: 'John Nathan',
      noOfCards: '2',
      linkedCards: '6449(CC), 2(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '93b49e2c',
      deviceOs: 'ANDROID',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '85680896',
      username: 'rpjdev3',
      domain: 'ADCB',
      mobileNumber: '552295823',
      customerFullName: 'Lesha Torphy',
      noOfCards: '8',
      linkedCards: '6449(CC), 3(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '53b72870-57',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '85295896',
      username: 'robdev2',
      domain: 'ADCB',
      mobileNumber: '559252091',
      customerFullName: 'Chloe Garcia',
      noOfCards: '2',
      linkedCards: '1500(DC), 3(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '1e638f57-c4',
      deviceOs: 'ANDROID',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '54731136',
      username: 'akunrw88',
      domain: 'ADCB',
      mobileNumber: '558300649',
      customerFullName: 'John Lewis',
      noOfCards: '4',
      linkedCards: '3472(DC), 6(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '3eaa835c-dc',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '23567138',
      username: 'lindathom',
      domain: 'ADCB',
      mobileNumber: '559795164',
      customerFullName: 'Linda Thomas',
      noOfCards: '0',
      linkedCards: '',
      customerPreference: '',
      appRegistrationStatus: 'Initiated',
      appRegisteredDevice: '########',
      deviceId: 'sf302ec5f00',
      deviceOs: 'ANDROID',
      pushNotificationEnabled: '',
    },
    {
      customerId: '85862408',
      username: 'noushad',
      domain: 'ADCB',
      mobileNumber: '558462750',
      customerFullName: 'Robert Robin',
      noOfCards: '3',
      linkedCards: '0595(DC), 6(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '5a7c0ea2-df',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '19672134',
      username: 'testhima',
      domain: 'ADCB',
      mobileNumber: '551651610',
      customerFullName: 'David Clark',
      noOfCards: '2',
      linkedCards: '0209(CC), 1(Active)',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '0b7ffe0-da6',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '11470244',
      username: 'awahi345',
      domain: 'ADCB',
      mobileNumber: '551259016',
      customerFullName: 'Anthony Garcia',
      noOfCards: '1',
      linkedCards: '8087(CC), Active',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '94a075e5-f1',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    },
    {
      customerId: '20144146',
      username: 'pr4soon',
      domain: 'ADCB',
      mobileNumber: '551233465',
      customerFullName: 'Emma Garcia',
      noOfCards: '1',
      linkedCards: '6449(CC), Active',
      customerPreference: 'Active',
      appRegistrationStatus: 'Completed',
      appRegisteredDevice: '########',
      deviceId: '72aa4c4c-44',
      deviceOs: 'IOS',
      pushNotificationEnabled: 'TRUE',
    }
  ];

  const handleExport = (type: 'csv') => {
    switch (type) {
      case 'csv':
        const csvContent = [
          Object.keys(mockData[0]).join(','),
          ...mockData.map(item => Object.values(item).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'laas-user-registration-report.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
    }
  };

  return (
    <Card>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={2}>App User Registration Report</Title>
          <Space>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={() => handleExport('csv')}
            >
              CSV
            </Button>
          </Space>
        </div>
        <Table
          columns={columns}
          dataSource={mockData}
          scroll={{ x: 'max-content', y: 'calc(100vh - 300px)' }}
          size="small"
          pagination={{
            total: mockData.length,
            pageSize: 50,
            showSizeChanger: false,
            showQuickJumper: true,
          }}
        />
      </Space>
    </Card>
  );
};

export default LaasUserRegistrationReport;
