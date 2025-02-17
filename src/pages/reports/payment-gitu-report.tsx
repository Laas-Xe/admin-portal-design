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

interface PaymentGituRecord {
  transactionId: string;
  customerId: string;
  customerNumber: string;
  userName: string;
  transactionProvider: string;
  billerName: string;
  subBillerCifAmount: string;
  paymentMxCoreAmount: string;
  cardAmount: string;
  lastFourDigits: string;
  cardTransactionId: string;
  transferredTpAmount: string;
  tpTransactionId: string;
  status: string;
  batchNumber: string;
}

export const PaymentGituReport: React.FC = () => {
  const { token } = theme.useToken();

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      width: 150,
    },
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
      width: 120,
    },
    {
      title: 'Customer Number',
      dataIndex: 'customerNumber',
      key: 'customerNumber',
      width: 150,
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      width: 150,
    },
    {
      title: 'Transaction Provider',
      dataIndex: 'transactionProvider',
      key: 'transactionProvider',
      width: 150,
    },
    {
      title: 'Biller Name',
      dataIndex: 'billerName',
      key: 'billerName',
      width: 150,
    },
    {
      title: 'Sub Biller CIF Amount',
      dataIndex: 'subBillerCifAmount',
      key: 'subBillerCifAmount',
      width: 150,
    },
    {
      title: 'Payment MX Core Amount',
      dataIndex: 'paymentMxCoreAmount',
      key: 'paymentMxCoreAmount',
      width: 150,
    },
    {
      title: 'Card Amount',
      dataIndex: 'cardAmount',
      key: 'cardAmount',
      width: 120,
    },
    {
      title: 'Last 4 digits',
      dataIndex: 'lastFourDigits',
      key: 'lastFourDigits',
      width: 120,
    },
    {
      title: 'Card Transaction ID',
      dataIndex: 'cardTransactionId',
      key: 'cardTransactionId',
      width: 150,
    },
    {
      title: 'Transferred TP Amount',
      dataIndex: 'transferredTpAmount',
      key: 'transferredTpAmount',
      width: 150,
    },
    {
      title: 'TP Transaction ID',
      dataIndex: 'tpTransactionId',
      key: 'tpTransactionId',
      width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => (
        <Tag color={status === 'COMPLETED' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Batch Number',
      dataIndex: 'batchNumber',
      key: 'batchNumber',
      width: 120,
    },
  ];

  const mockData: PaymentGituRecord[] = [
    {
      transactionId: '51632028',
      customerId: '14242638',
      customerNumber: 'Visa Herman Halgu',
      userName: '########',
      transactionProvider: 'RUPEEDOM',
      billerName: 'WAFFLE',
      subBillerCifAmount: '0',
      paymentMxCoreAmount: '0',
      cardAmount: '1500',
      lastFourDigits: '0',
      cardTransactionId: '0',
      transferredTpAmount: '0',
      tpTransactionId: '98465561',
      status: 'COMPLETED',
      batchNumber: '1750',
    },
    {
      transactionId: '99259591',
      customerId: '14242638',
      customerNumber: 'Visa Herman Halgu',
      userName: '########',
      transactionProvider: 'CREDITCARD',
      billerName: 'BuyTP',
      subBillerCifAmount: '100',
      paymentMxCoreAmount: '0',
      cardAmount: '25000',
      lastFourDigits: '3427',
      cardTransactionId: '8-6415P-11',
      transferredTpAmount: '100',
      tpTransactionId: '98465561',
      status: 'COMPLETED',
      batchNumber: '1750',
    },
    {
      transactionId: '67726479',
      customerId: '20888179',
      customerNumber: 'manan123',
      userName: '########',
      transactionProvider: 'BUYTP',
      billerName: 'BuyTP',
      subBillerCifAmount: '50',
      paymentMxCoreAmount: '0',
      cardAmount: '12500',
      lastFourDigits: '3427',
      cardTransactionId: '8-6415P-11',
      transferredTpAmount: '50',
      tpTransactionId: '98465561',
      status: 'COMPLETED',
      batchNumber: '1750',
    },
    {
      transactionId: '78834562',
      customerId: '15567890',
      customerNumber: 'Sarah Johnson',
      userName: '########',
      transactionProvider: 'RUPEEDOM',
      billerName: 'WAFFLE',
      subBillerCifAmount: '75',
      paymentMxCoreAmount: '0',
      cardAmount: '18750',
      lastFourDigits: '5678',
      cardTransactionId: '8-7725P-12',
      transferredTpAmount: '75',
      tpTransactionId: '98465562',
      status: 'COMPLETED',
      batchNumber: '1751',
    },
    {
      transactionId: '89945673',
      customerId: '16678901',
      customerNumber: 'Michael Brown',
      userName: '########',
      transactionProvider: 'CREDITCARD',
      billerName: 'BuyTP',
      subBillerCifAmount: '200',
      paymentMxCoreAmount: '0',
      cardAmount: '50000',
      lastFourDigits: '9012',
      cardTransactionId: '8-8835P-13',
      transferredTpAmount: '200',
      tpTransactionId: '98465563',
      status: 'FAILED',
      batchNumber: '1751',
    },
    {
      transactionId: '90056784',
      customerId: '17789012',
      customerNumber: 'Emma Davis',
      userName: '########',
      transactionProvider: 'BUYTP',
      billerName: 'BuyTP',
      subBillerCifAmount: '150',
      paymentMxCoreAmount: '0',
      cardAmount: '37500',
      lastFourDigits: '3456',
      cardTransactionId: '8-9945P-14',
      transferredTpAmount: '150',
      tpTransactionId: '98465564',
      status: 'COMPLETED',
      batchNumber: '1752',
    },
    {
      transactionId: '91167895',
      customerId: '18890123',
      customerNumber: 'James Wilson',
      userName: '########',
      transactionProvider: 'RUPEEDOM',
      billerName: 'WAFFLE',
      subBillerCifAmount: '125',
      paymentMxCoreAmount: '0',
      cardAmount: '31250',
      lastFourDigits: '7890',
      cardTransactionId: '8-1055P-15',
      transferredTpAmount: '125',
      tpTransactionId: '98465565',
      status: 'FAILED',
      batchNumber: '1752',
    },
    {
      transactionId: '92278906',
      customerId: '19901234',
      customerNumber: 'Oliver Smith',
      userName: '########',
      transactionProvider: 'CREDITCARD',
      billerName: 'BuyTP',
      subBillerCifAmount: '175',
      paymentMxCoreAmount: '0',
      cardAmount: '43750',
      lastFourDigits: '1234',
      cardTransactionId: '8-1165P-16',
      transferredTpAmount: '175',
      tpTransactionId: '98465566',
      status: 'COMPLETED',
      batchNumber: '1753',
    },
    {
      transactionId: '93389017',
      customerId: '20012345',
      customerNumber: 'Sophia Lee',
      userName: '########',
      transactionProvider: 'BUYTP',
      billerName: 'BuyTP',
      subBillerCifAmount: '225',
      paymentMxCoreAmount: '0',
      cardAmount: '56250',
      lastFourDigits: '5678',
      cardTransactionId: '8-1275P-17',
      transferredTpAmount: '225',
      tpTransactionId: '98465567',
      status: 'COMPLETED',
      batchNumber: '1753',
    },
    {
      transactionId: '94490128',
      customerId: '21123456',
      customerNumber: 'Lucas Martin',
      userName: '########',
      transactionProvider: 'RUPEEDOM',
      billerName: 'WAFFLE',
      subBillerCifAmount: '250',
      paymentMxCoreAmount: '0',
      cardAmount: '62500',
      lastFourDigits: '9012',
      cardTransactionId: '8-1385P-18',
      transferredTpAmount: '250',
      tpTransactionId: '98465568',
      status: 'FAILED',
      batchNumber: '1754',
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
        link.setAttribute('download', 'payment-gitu-report.csv');
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
          <Title level={2}>App Payment GITU Transaction Report</Title>
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

export default PaymentGituReport;
