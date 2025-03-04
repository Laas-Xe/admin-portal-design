import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  theme,
  Space,
  Steps,
  Form,
  Input,
  Select
} from 'antd';
import { useNavigate, useLocation } from 'react-router';

const { Title } = Typography;
const { useToken } = theme;
const { Option } = Select;

// Define steps for the stepper
const steps = [
  {
    title: 'Categories',
  },
  {
    title: 'Provider',
  },
  {
    title: 'Update',
  },
];

export const BillerSubBillerUpdate: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  
  // Get the selected category and provider from location state
  const selectedCategory = location.state?.category || 'Telecom';
  const selectedProvider = location.state?.provider || 'Du';

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    console.log('Selected category:', selectedCategory);
    console.log('Selected provider:', selectedProvider);
    // In a real app, submit the data to an API
    
    // Navigate back to the main page or show success message
    navigate('/biller-subbiller');
  };

  const handleCancel = () => {
    // Go back to the provider page
    navigate('/biller-subbiller/provider', { 
      state: { category: selectedCategory } 
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Biller / Sub-Biller IDs</Title>
        
        {/* Stepper */}
        <div style={{ margin: `${token.marginLG}px 0` }}>
          <Steps
            size="small"
            current={2}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Update Biller Details</Title>
          
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={{
              category: selectedCategory,
              provider: selectedProvider,
              billerCode: '',
              subBillerCode: '',
              status: 'active'
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="category"
                  label="Category"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="provider"
                  label="Provider"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="billerCode"
                  label="Biller Code"
                  rules={[{ required: true, message: 'Please enter biller code' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="subBillerCode"
                  label="Sub-Biller Code"
                  rules={[{ required: true, message: 'Please enter sub-biller code' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true, message: 'Please select status' }]}
                >
                  <Select>
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            
            <Row justify="end" style={{ marginTop: token.marginXL }}>
              <Space>
                <Button onClick={handleCancel}>CANCEL</Button>
                <Button 
                  type="primary"
                  htmlType="submit"
                >
                  SUBMIT
                </Button>
              </Space>
            </Row>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default BillerSubBillerUpdate;
