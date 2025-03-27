import React, { useState } from 'react';
import { Button, Tag, Card, Typography, Row, Col, Modal } from 'antd';

const { Title, Text } = Typography;

interface CustomerCardProps {
  customer: {
    name: string;
    username: string;
    deviceType: string;
    phoneNumber: string;
    email: string;
    cid: string;
    status: 'Active' | 'Inactive';
  };
  onUnlink: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onUnlink }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleConfirm = () => {
    setIsModalVisible(false);
    onUnlink();
  };

  return (
    <div className="mt-4 max-w-4xl">
      <Card 
        bodyStyle={{ padding: '32px' }}
      >
        <div className="flex justify-between items-center mb-12">
          <Title level={3} style={{ margin: 0 }}>{customer.name}</Title>
          <Tag color="blue" className="py-1 px-3">{customer.status}</Tag>
        </div>
        <Row gutter={24} className="mb-12">
          <Col span={4}>
            <Text type="secondary">CID</Text>
            <div className="mt-2">
              <Text>{customer.cid}</Text>
            </div>
          </Col>
          <Col span={5}>
            <Text type="secondary">Device</Text>
            <div className="mt-2">
              <Text>{customer.deviceType}</Text>
            </div>
          </Col>
          <Col span={5}>
            <Text type="secondary">Username</Text>
            <div className="mt-2">
              <Text>{customer.username}</Text>
            </div>
          </Col>
          <Col span={5}>
            <Text type="secondary">Phone Number</Text>
            <div className="mt-2">
              <Text>{customer.phoneNumber}</Text>
            </div>
          </Col>
          <Col span={5}>
            <Text type="secondary">Email</Text>
            <div className="mt-2">
              <Text>{customer.email}</Text>
            </div>
          </Col>
        </Row>
        <div className="mt-8">
          <Button 
            type="primary" 
            danger
            block
            onClick={showModal}
            style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
            size="large"
          >
            UNLINK DEVICE
          </Button>
        </div>
      </Card>

      <Modal
        title="Confirm Device Unlinking"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button 
            key="unlink" 
            type="primary" 
            danger 
            onClick={handleConfirm}
            style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
          >
            Unlink Device
          </Button>,
        ]}
      >
        <p>Are you sure you want to unlink the device for {customer.name}?</p>
        <p>This action cannot be undone.</p>
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text type="secondary">CID:</Text>
              <div><Text strong>{customer.cid}</Text></div>
            </Col>
            <Col span={12}>
              <Text type="secondary">Username:</Text>
              <div><Text strong>{customer.username}</Text></div>
            </Col>
            <Col span={12}>
              <Text type="secondary">Device:</Text>
              <div><Text strong>{customer.deviceType}</Text></div>
            </Col>
            <Col span={12}>
              <Text type="secondary">Phone Number:</Text>
              <div><Text strong>{customer.phoneNumber}</Text></div>
            </Col>
            <Col span={12}>
              <Text type="secondary">Email:</Text>
              <div><Text strong>{customer.email}</Text></div>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};

export default CustomerCard;
