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

interface ReconciliationRecord {
  transactionId: string;
  customerCif: string;
  customerName: string;
  transactionDate: string;
  transactionProvider: string;
  billerName: string;
  subBillerCifAmount: string;
  paymentType: string;
  mxCoreAmount: string;
  lastEdgeId: string;
  coreTransId: string;
  transferredTpAmount: string;
  tpTransactionId: string;
  transactionStatus: string;
  transactionMessage: string;
  paymentStatus: string;
  reconciliationStatus: string;
  pendingGituStatus: string;
  procashAck: string;
  procashStatus: string;
}

export const ReconciliationReport: React.FC = () => {
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
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
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
      title: 'Payment Type',
      dataIndex: 'paymentType',
      key: 'paymentType',
      width: 120,
    },
    {
      title: 'MX Core Amount',
      dataIndex: 'mxCoreAmount',
      key: 'mxCoreAmount',
      width: 120,
    },
    {
      title: 'Last Edge ID',
      dataIndex: 'lastEdgeId',
      key: 'lastEdgeId',
      width: 120,
    },
    {
      title: 'Core Trans ID',
      dataIndex: 'coreTransId',
      key: 'coreTransId',
      width: 120,
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
      title: 'Transaction Status',
      dataIndex: 'transactionStatus',
      key: 'transactionStatus',
      width: 150,
      render: (status: string) => {
        const statusColor = {
          'Success': 'green',
          'Pending': 'orange',
          'Failed': 'red',
          'Processing': 'blue'
        }[status] || 'default';
        return <Tag color={statusColor}>{status}</Tag>;
      }
    },
    {
      title: 'Transaction Message',
      dataIndex: 'transactionMessage',
      key: 'transactionMessage',
      width: 200,
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      width: 120,
      render: (status: string) => {
        const statusColor = {
          'Completed': 'green',
          'Failed': 'red',
          'Processing': 'blue',
          'In Progress': 'geekblue',
          'Warning': 'orange',
          'Partial': 'purple'
        }[status] || 'default';
        return <Tag color={statusColor}>{status}</Tag>;
      }
    },
    {
      title: 'Reconciliation Status',
      dataIndex: 'reconciliationStatus',
      key: 'reconciliationStatus',
      width: 150,
      render: (status: string) => {
        const statusColor = {
          'Matched': 'green',
          'Mismatched': 'red',
          'Pending': 'orange',
          'Not Required': 'gray',
          'Failed': 'volcano',
          'Duplicate': 'purple',
          'Partial': 'geekblue'
        }[status] || 'default';
        return <Tag color={statusColor}>{status}</Tag>;
      }
    },
    {
      title: 'Pending GITU Status',
      dataIndex: 'pendingGituStatus',
      key: 'pendingGituStatus',
      width: 150,
    },
    {
      title: 'Procash Ack',
      dataIndex: 'procashAck',
      key: 'procashAck',
      width: 120,
    },
    {
      title: 'Procash Status',
      dataIndex: 'procashStatus',
      key: 'procashStatus',
      width: 120,
    },
  ];

  // Sample data - replace with actual data from API
  const data: ReconciliationRecord[] = [
    {
      transactionId: '8R1M1571-72',
      customerCif: '50188875',
      customerName: 'John Doe',
      transactionDate: '12/12/2024',
      transactionProvider: 'MBME',
      billerName: 'DEWA',
      subBillerCifAmount: '112',
      paymentType: 'CC_EP',
      mxCoreAmount: '112',
      lastEdgeId: '3377',
      coreTransId: '64814541',
      transferredTpAmount: '112',
      tpTransactionId: 'TP123456',
      transactionStatus: 'Success',
      transactionMessage: 'Transaction completed',
      paymentStatus: 'Completed',
      reconciliationStatus: 'Matched',
      pendingGituStatus: 'No',
      procashAck: 'Received',
      procashStatus: 'Success'
    },
    {
      transactionId: 'BK9256N2-89',
      customerCif: '50188876',
      customerName: 'Sarah Wilson',
      transactionDate: '12/12/2024',
      transactionProvider: 'FINSERV',
      billerName: 'SMILE',
      subBillerCifAmount: '250',
      paymentType: 'DC_EP',
      mxCoreAmount: '250',
      lastEdgeId: '3378',
      coreTransId: '64814542',
      transferredTpAmount: '250',
      tpTransactionId: 'TP123457',
      transactionStatus: 'Pending',
      transactionMessage: 'Transaction in progress',
      paymentStatus: 'Processing',
      reconciliationStatus: 'Pending',
      pendingGituStatus: 'Yes',
      procashAck: 'Pending',
      procashStatus: 'In Progress'
    },
    {
      transactionId: 'CR7M1573-45',
      customerCif: '50188877',
      customerName: 'Michael Brown',
      transactionDate: '12/12/2024',
      transactionProvider: 'NI',
      billerName: 'DEWA',
      subBillerCifAmount: '500',
      paymentType: 'CC_EP',
      mxCoreAmount: '500',
      lastEdgeId: '3379',
      coreTransId: '64814543',
      transferredTpAmount: '500',
      tpTransactionId: 'TP123458',
      transactionStatus: 'Failed',
      transactionMessage: 'Insufficient funds',
      paymentStatus: 'Failed',
      reconciliationStatus: 'Not Required',
      pendingGituStatus: 'No',
      procashAck: 'Not Required',
      procashStatus: 'Failed'
    },
    {
      transactionId: 'DK8M1574-23',
      customerCif: '50188878',
      customerName: 'Emma Davis',
      transactionDate: '12/12/2024',
      transactionProvider: 'SMILE',
      billerName: 'MBME',
      subBillerCifAmount: '750',
      paymentType: 'DC_EP',
      mxCoreAmount: '750',
      lastEdgeId: '3380',
      coreTransId: '64814544',
      transferredTpAmount: '750',
      tpTransactionId: 'TP123459',
      transactionStatus: 'Success',
      transactionMessage: 'Transaction completed',
      paymentStatus: 'Completed',
      reconciliationStatus: 'Mismatched',
      pendingGituStatus: 'No',
      procashAck: 'Received',
      procashStatus: 'Amount Mismatch'
    },
    {
      transactionId: 'EL5M1575-67',
      customerCif: '50188879',
      customerName: 'James Wilson',
      transactionDate: '12/12/2024',
      transactionProvider: 'DEWA',
      billerName: 'FINSERV',
      subBillerCifAmount: '1000',
      paymentType: 'CC_EP',
      mxCoreAmount: '1000',
      lastEdgeId: '3381',
      coreTransId: '64814545',
      transferredTpAmount: '1000',
      tpTransactionId: 'TP123460',
      transactionStatus: 'Success',
      transactionMessage: 'Transaction completed with delay',
      paymentStatus: 'Completed',
      reconciliationStatus: 'Matched',
      pendingGituStatus: 'Yes',
      procashAck: 'Received',
      procashStatus: 'Success'
    },
    {
      transactionId: 'FM2M1576-90',
      customerCif: '50188880',
      customerName: 'Oliver Smith',
      transactionDate: '12/12/2024',
      transactionProvider: 'MBME',
      billerName: 'NI',
      subBillerCifAmount: '325',
      paymentType: 'DC_EP',
      mxCoreAmount: '325',
      lastEdgeId: '3382',
      coreTransId: '64814546',
      transferredTpAmount: '325',
      tpTransactionId: 'TP123461',
      transactionStatus: 'Processing',
      transactionMessage: 'Awaiting confirmation',
      paymentStatus: 'In Progress',
      reconciliationStatus: 'Pending',
      pendingGituStatus: 'Yes',
      procashAck: 'Awaiting',
      procashStatus: 'Processing'
    },
    {
      transactionId: 'GN3M1577-12',
      customerCif: '50188881',
      customerName: 'Sophia Chen',
      transactionDate: '12/12/2024',
      transactionProvider: 'FINSERV',
      billerName: 'DEWA',
      subBillerCifAmount: '1500',
      paymentType: 'CC_EP',
      mxCoreAmount: '1500',
      lastEdgeId: '3383',
      coreTransId: '64814547',
      transferredTpAmount: '1450',
      tpTransactionId: 'TP123462',
      transactionStatus: 'Success',
      transactionMessage: 'Amount mismatch detected',
      paymentStatus: 'Completed',
      reconciliationStatus: 'Mismatched',
      pendingGituStatus: 'No',
      procashAck: 'Received',
      procashStatus: 'Amount Variance'
    },
    {
      transactionId: 'HP4M1578-34',
      customerCif: '50188882',
      customerName: 'Robert Johnson',
      transactionDate: '12/12/2024',
      transactionProvider: 'SMILE',
      billerName: 'MBME',
      subBillerCifAmount: '2000',
      paymentType: 'DC_EP',
      mxCoreAmount: '2000',
      lastEdgeId: '3384',
      coreTransId: '64814548',
      transferredTpAmount: '0',
      tpTransactionId: 'TP123463',
      transactionStatus: 'Failed',
      transactionMessage: 'Network timeout',
      paymentStatus: 'Failed',
      reconciliationStatus: 'Failed',
      pendingGituStatus: 'No',
      procashAck: 'Failed',
      procashStatus: 'Timeout'
    },
    {
      transactionId: 'IQ5M1579-56',
      customerCif: '50188883',
      customerName: 'Maria Garcia',
      transactionDate: '12/12/2024',
      transactionProvider: 'NI',
      billerName: 'SMILE',
      subBillerCifAmount: '800',
      paymentType: 'CC_EP',
      mxCoreAmount: '800',
      lastEdgeId: '3385',
      coreTransId: '64814549',
      transferredTpAmount: '800',
      tpTransactionId: 'TP123464',
      transactionStatus: 'Success',
      transactionMessage: 'Duplicate transaction detected',
      paymentStatus: 'Warning',
      reconciliationStatus: 'Duplicate',
      pendingGituStatus: 'Yes',
      procashAck: 'Received',
      procashStatus: 'Duplicate'
    },
    {
      transactionId: 'JR6M1580-78',
      customerCif: '50188884',
      customerName: 'David Kim',
      transactionDate: '12/12/2024',
      transactionProvider: 'DEWA',
      billerName: 'FINSERV',
      subBillerCifAmount: '1750',
      paymentType: 'DC_EP',
      mxCoreAmount: '1750',
      lastEdgeId: '3386',
      coreTransId: '64814550',
      transferredTpAmount: '1750',
      tpTransactionId: 'TP123465',
      transactionStatus: 'Success',
      transactionMessage: 'Partial payment processed',
      paymentStatus: 'Partial',
      reconciliationStatus: 'Partial',
      pendingGituStatus: 'Yes',
      procashAck: 'Partial',
      procashStatus: 'Partial Payment'
    }
  ];

  const handleExport = (type: 'csv') => {
    switch (type) {
      case 'csv':
        const csvContent = [
          Object.keys(data[0]).join(','),
          ...data.map(item => Object.values(item).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'reconciliation-report.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
    }
  };

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Title level={2}>Reconciliation Report</Title>
        <Space>
          <Button
            type="primary"
            onClick={() => handleExport('csv')}
            icon={<DownloadOutlined />}
          >
            CSV
          </Button>
        </Space>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 'max-content', y: 'calc(100vh - 300px)' }}
        size="small"
        pagination={{
          total: data.length,
          pageSize: 50,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </Card>
  );
};

export default ReconciliationReport;
