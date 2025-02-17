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

interface PaymentTransactionRecord {
  transactionId: string;
  customerCif: string;
  customerName: string;
  transactionProvider: string;
  billerName: string;
  subBillerCifAmount: string;
  paymentMxCoreAmount: string;
  lastFourDigits: string;
  cardTransactionId: string;
  transferredTpAmount: string;
  tpTransactionId: string;
  merchantTransactionId: string;
  recipient: string;
  status: string;
  updateDate: string;
}

export const PaymentTransactionReport: React.FC = () => {
  const { token } = theme.useToken();

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      width: 150,
    },
    {
      title: 'Customer CIF',
      dataIndex: 'customerCif',
      key: 'customerCif',
      width: 120,
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
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
      title: 'Merchant Transaction ID',
      dataIndex: 'merchantTransactionId',
      key: 'merchantTransactionId',
      width: 150,
    },
    {
      title: 'Recipient',
      dataIndex: 'recipient',
      key: 'recipient',
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
      title: 'Update Date',
      dataIndex: 'updateDate',
      key: 'updateDate',
      width: 150,
    },
  ];

  const mockData: PaymentTransactionRecord[] = [
    {
      transactionId: '5b6c9779-4c',
      customerCif: '########',
      customerName: 'Francis prickett',
      transactionProvider: 'MBME',
      billerName: 'DU',
      subBillerCifAmount: '650 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '115000.18',
      cardTransactionId: '650',
      transferredTpAmount: '0',
      tpTransactionId: '98465561',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-18',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '7d5e8669-3b',
      customerCif: '########',
      customerName: 'Sarah Johnson',
      transactionProvider: 'MBME',
      billerName: 'DU',
      subBillerCifAmount: '850 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '125000.20',
      cardTransactionId: '850',
      transferredTpAmount: '0',
      tpTransactionId: '98465562',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-19',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '9f4d7558-2a',
      customerCif: '########',
      customerName: 'Michael Smith',
      transactionProvider: 'FINSERV',
      billerName: 'MBME',
      subBillerCifAmount: '750 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '118000.15',
      cardTransactionId: '750',
      transferredTpAmount: '0',
      tpTransactionId: '98465563',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-20',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '3c2b1447-1d',
      customerCif: '########',
      customerName: 'Emma Davis',
      transactionProvider: 'NI',
      billerName: 'SMILE',
      subBillerCifAmount: '950 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '135000.25',
      cardTransactionId: '950',
      transferredTpAmount: '0',
      tpTransactionId: '98465564',
      merchantTransactionId: 'FAILED',
      recipient: '2-50211-21',
      status: 'FAILED',
      updateDate: '##########',
    },
    {
      transactionId: '4e3d2336-5f',
      customerCif: '########',
      customerName: 'James Wilson',
      transactionProvider: 'MBME',
      billerName: 'DU',
      subBillerCifAmount: '550 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '105000.12',
      cardTransactionId: '550',
      transferredTpAmount: '0',
      tpTransactionId: '98465565',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-22',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '2a1b5225-4e',
      customerCif: '########',
      customerName: 'Oliver Brown',
      transactionProvider: 'FINSERV',
      billerName: 'DEWA',
      subBillerCifAmount: '1050 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '145000.30',
      cardTransactionId: '1050',
      transferredTpAmount: '0',
      tpTransactionId: '98465566',
      merchantTransactionId: 'FAILED',
      recipient: '2-50211-23',
      status: 'FAILED',
      updateDate: '##########',
    },
    {
      transactionId: '8g7f6114-3d',
      customerCif: '########',
      customerName: 'Sophia Lee',
      transactionProvider: 'SMILE',
      billerName: 'NI',
      subBillerCifAmount: '450 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '95000.10',
      cardTransactionId: '450',
      transferredTpAmount: '0',
      tpTransactionId: '98465567',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-24',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '6h5g4003-2c',
      customerCif: '########',
      customerName: 'Lucas Martin',
      transactionProvider: 'MBME',
      billerName: 'DU',
      subBillerCifAmount: '750 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '125000.18',
      cardTransactionId: '750',
      transferredTpAmount: '0',
      tpTransactionId: '98465568',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-25',
      status: 'COMPLETED',
      updateDate: '##########',
    },
    {
      transactionId: '1j9i8992-1b',
      customerCif: '########',
      customerName: 'Ava Thompson',
      transactionProvider: 'DEWA',
      billerName: 'FINSERV',
      subBillerCifAmount: '850 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '135000.22',
      cardTransactionId: '850',
      transferredTpAmount: '0',
      tpTransactionId: '98465569',
      merchantTransactionId: 'FAILED',
      recipient: '2-50211-26',
      status: 'FAILED',
      updateDate: '##########',
    },
    {
      transactionId: '5k4l3881-9a',
      customerCif: '########',
      customerName: 'William Clark',
      transactionProvider: 'NI',
      billerName: 'SMILE',
      subBillerCifAmount: '950 TP',
      paymentMxCoreAmount: '0',
      lastFourDigits: '145000.28',
      cardTransactionId: '950',
      transferredTpAmount: '0',
      tpTransactionId: '98465570',
      merchantTransactionId: 'COMPLETED',
      recipient: '2-50211-27',
      status: 'COMPLETED',
      updateDate: '##########',
    },
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
        link.setAttribute('download', 'payment-transaction-report.csv');
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
          <Title level={2}>App Payment Transaction Report</Title>
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

export default PaymentTransactionReport;
