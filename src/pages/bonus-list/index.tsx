import React from 'react';
import {
  Card,
  Typography,
  Tag,
  Space,
  Button,
  Table,
  Tabs,
  theme
} from 'antd';
import { EditOutlined, EyeOutlined, CopyOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useNavigation } from '@refinedev/core';

const { Title } = Typography;
const { TabPane } = Tabs;

interface BonusRecord {
  reqId: string;
  module: string;
  createdAt: string;
  maker: string;
  checker: string | null;
  lastModified: string | null;
  status: 'Rejected' | 'Approved' | 'Draft';
  promotionalStatus: 'NA' | 'Active' | 'Terminated' | 'Que' | 'Expired';
  comments: string | null;
  terminationRequest?: boolean;
}

export const BonusList: React.FC = () => {
  const { token } = theme.useToken();
  const { show, edit, create } = useNavigation();

  const makerData: BonusRecord[] = [
    {
      reqId: '1',
      module: 'Registration Bonus',
      createdAt: '01/01/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '02/01/2025 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Incorrect amount',
      terminationRequest: false
    },
    {
      reqId: '2',
      module: 'Registration Bonus',
      createdAt: '03/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '04/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Active',
      comments: 'Ok',
      terminationRequest: true
    },
    {
      reqId: '3',
      module: 'Transaction Bonus',
      createdAt: '06/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Aditi',
      lastModified: '09/02/25 14:35:00',
      status: 'Draft',
      promotionalStatus: 'NA',
      comments: null,
      terminationRequest: false
    },
    {
      reqId: '4',
      module: 'Transaction Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Aditi',
      lastModified: '09/02/25 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Incorrect value',
      terminationRequest: false
    },
    {
      reqId: '5',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '09/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Terminated',
      comments:  'ok',
      terminationRequest: true
    },
    {
      reqId: '6',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '09/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Expired',
      comments:  'ok',
      terminationRequest: false
    },
    {
      reqId: '7',
      module: 'Transaction Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Aditi',
      lastModified: '09/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Active',
      comments: 'ok',
      terminationRequest: false
    },
    {
      reqId: '8',
      module: 'Transaction Bonus',
      createdAt: '06/02/25 14:35:00',
      maker: 'Robin',
      checker:'Aditi',
      lastModified: '09/02/25 14:35:00',
      status: 'Draft',
      promotionalStatus: 'NA',
      comments: null
    },
    {
      reqId: '9',
      module: 'Registration Bonus',
      createdAt: '06/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '09/02/25 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Too long period',
      terminationRequest: false
    },
    {
      reqId: '10',
      module: 'Transaction Bonus',
      createdAt: '06/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Aditi',
      lastModified: '09/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Que',
      comments: 'ok',
      terminationRequest: false
    }    
  ];

  const checkerData: BonusRecord[] = [
    {
      reqId: '1',
      module: 'Registration Bonus',
      createdAt: '01/01/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '02/01/2025 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Incorrect amount',
      terminationRequest: false
    },
    {
      reqId: '2',
      module: 'Registration Bonus',
      createdAt: '03/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '04/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Active',
      comments: 'Ok',
      terminationRequest: true
    },
    {
      reqId: '3',
      module: 'Registration Bonus',
      createdAt: '05/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '06/02/25 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Ok',
      terminationRequest: false
    },
    {
      reqId: '4',
      module: 'Registration Bonus',
      createdAt: '07/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '08/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Terminated',
      comments: 'Ok',
      terminationRequest: false
    },
    {
      reqId: '5',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Que',
      comments: 'Ok',
      terminationRequest: true 
    },
    {
      reqId: '6',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Rejected',
      promotionalStatus: 'NA',
      comments: 'Ok',
      terminationRequest: false
    },
    {
      reqId: '7',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Expired',
      comments: 'Ok',
      terminationRequest: false
    },
    {
      reqId: '8',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Active',
      comments: 'Ok',
      terminationRequest: true
    },
    {
      reqId: '9',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Que',
      comments: 'Ok',
      terminationRequest: true
    },
    {
      reqId: '10',
      module: 'Registration Bonus',
      createdAt: '09/02/25 14:35:00',
      maker: 'Robin',
      checker: 'Randhir',
      lastModified: '10/02/25 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Que',
      comments: 'Ok',
      terminationRequest: true
    }
  ];

  const legacyData: BonusRecord[] = [
    {
      reqId: 'L1',
      module: 'Registration Bonus',
      createdAt: '01/01/24 14:35:00',
      maker: 'Legacy System',
      checker: 'System',
      lastModified: '02/01/2024 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Expired',
      comments: null,
      terminationRequest: false
    },
    {
      reqId: 'L2',
      module: 'Transaction Bonus',
      createdAt: '03/02/24 14:35:00',
      maker: 'Legacy System',
      checker: 'System',
      lastModified: '04/02/24 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Terminated',
      comments: null,
      terminationRequest: false
    },
    {
      reqId: 'L3',
      module: 'Registration Bonus',
      createdAt: '05/02/24 14:35:00',
      maker: 'Legacy System',
      checker: 'System',
      lastModified: '06/02/24 14:35:00',
      status: 'Approved',
      promotionalStatus: 'Expired',
      comments: null,
      terminationRequest: false
    }
  ];

  const columns = (isChecker: boolean) => [
    {
      title: 'Req ID',
      dataIndex: 'reqId',
      key: 'reqId',
    },
    {
      title: 'Module',
      dataIndex: 'module',
      key: 'module',
    },
    {
      title: 'Created at Date & Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Maker',
      dataIndex: 'maker',
      key: 'maker',
    },
    {
      title: 'Checker',
      dataIndex: 'checker',
      key: 'checker',
    },
    {
      title: 'Last Modified Date & Time',
      dataIndex: 'lastModified',
      key: 'lastModified',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'Approved' ? 'success' :
          status === 'Rejected' ? 'error' :
          'warning'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Promotional Status',
      dataIndex: 'promotionalStatus',
      key: 'promotionalStatus',
      render: (status: string) => (
        <Tag color={
          status === 'Active' ? 'success' :
          status === 'Terminated' ? 'error' :
          status === 'Expired' ? 'red' :
          status === 'Que' ? 'processing' :
          'default'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: BonusRecord) => (
        <Space>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => show('bonus', record.reqId)}
          >
            View
          </Button>
          {!isChecker && record.status === 'Draft' && (
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => edit('bonus', record.reqId)}
            >
              Edit
            </Button>
          )}
          {!isChecker && record.status !== 'Draft' && (
            <Button
              type="link"
              icon={<CopyOutlined />}
              onClick={() => create('bonus')}
            >
              Duplicate
            </Button>
          )}
          {!isChecker && record.promotionalStatus === 'Active' && (
            <Button
              danger
              type="link"
              icon={<CloseCircleOutlined />}
              onClick={() => {
                console.log('Terminating bonus:', record.reqId);
              }}
            >
              Stop Bonus
            </Button>
          )}
        </Space>
      ),
    },
    ...(isChecker ? [{
      title: 'Termination Request',
      key: 'terminationRequest',
      render: (_: any, record: BonusRecord) => (
        record.terminationRequest && 
        record.status === 'Approved' && 
        (record.promotionalStatus === 'Active' || record.promotionalStatus === 'Que') ? (
          <Space>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                console.log('Accepting termination for:', record.reqId);
              }}
            >
              Accept
            </Button>
            <Button
              danger
              size="small"
              onClick={() => {
                console.log('Rejecting termination for:', record.reqId);
              }}
            >
              Reject
            </Button>
          </Space>
        ) : null
      ),
    }] : []),
  ];

  const legacyColumns = [
    {
      title: 'Req ID',
      dataIndex: 'reqId',
      key: 'reqId',
    },
    {
      title: 'Module',
      dataIndex: 'module',
      key: 'module',
    },
    {
      title: 'Created at Date & Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Maker',
      dataIndex: 'maker',
      key: 'maker',
    },
    {
      title: 'Checker',
      dataIndex: 'checker',
      key: 'checker',
    },
    {
      title: 'Last Modified Date & Time',
      dataIndex: 'lastModified',
      key: 'lastModified',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={
          status === 'Approved' ? 'success' :
          status === 'Rejected' ? 'error' :
          'warning'
        }>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Promotional Status',
      dataIndex: 'promotionalStatus',
      key: 'promotionalStatus',
      render: (status: string) => (
        <Tag color={
          status === 'Active' ? 'success' :
          status === 'Terminated' ? 'error' :
          status === 'Expired' ? 'red' :
          status === 'Que' ? 'processing' :
          'default'
        }>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <Card
      style={{ 
        border: `1px solid ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        padding: token.paddingLG,
        background: token.colorBgContainer
      }}
    >
      <Title level={3} style={{ marginBottom: token.marginLG, color: token.colorTextHeading }}>
        Bonus Management List
      </Title>
      
      <Tabs defaultActiveKey="maker">
        <TabPane tab="Maker" key="maker">
          <Table
            dataSource={makerData}
            columns={columns(false)}
            rowKey="reqId"
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Checker" key="checker">
          <Table
            dataSource={checkerData}
            columns={columns(true)}
            rowKey="reqId"
            pagination={false}
          />
        </TabPane>
        <TabPane tab="Legacy" key="legacy">
          <Table
            dataSource={legacyData}
            columns={legacyColumns}
            rowKey="reqId"
            pagination={false}
          />
        </TabPane>
      </Tabs>
    </Card>
  );
}; 