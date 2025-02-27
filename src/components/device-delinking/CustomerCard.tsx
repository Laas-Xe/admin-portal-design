import React from 'react';
import { Button, Tag, Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

interface CustomerCardProps {
  customer: {
    name: string;
    deviceType: string;
    phoneNumber: string;
    email: string;
    status: 'Active' | 'Inactive';
  };
  onUnlink: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onUnlink }) => {
  return (
    <div className="mt-4 max-w-4xl">
      <Card 
        bodyStyle={{ padding: '32px' }}
      >
        <div className="flex justify-between items-center mb-12">
          <Title level={3} style={{ margin: 0 }}>{customer.name}</Title>
          <Tag color="blue" className="py-1 px-3">{customer.status}</Tag>
        </div>
        <Row gutter={48} className="mb-12">
          <Col span={8}>
            <Text type="secondary">Device</Text>
            <div className="mt-2">
              <Text>{customer.deviceType}</Text>
            </div>
          </Col>
          <Col span={8}>
            <Text type="secondary">Phone Number</Text>
            <div className="mt-2">
              <Text>{customer.phoneNumber}</Text>
            </div>
          </Col>
          <Col span={8}>
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
            onClick={onUnlink}
            style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
            size="large"
          >
            UNLINK DEVICE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerCard;
