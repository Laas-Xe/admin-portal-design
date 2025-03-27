import React from 'react';
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
  Input
} from 'antd';
import { useNavigate, useLocation } from 'react-router';

const { Title } = Typography;
const { useToken } = theme;

// Define steps for the stepper
const steps = [
  {
    title: 'Categories',
  },
  {
    title: 'Provider',
  },
  {
    title: 'Service Type',
  },
  {
    title: 'Update',
  },
];

export const CreditCardPaymentUpdate: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  
  // Get the selected category, provider, and service type from location state
  const selectedCategory = location.state?.category || 'Credit';
  const selectedProvider = location.state?.provider || 'Visa';
  const selectedServiceType = location.state?.serviceType || 'Domestic';

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    console.log('Selected category:', selectedCategory);
    console.log('Selected provider:', selectedProvider);
    console.log('Selected service type:', selectedServiceType);
    // In a real app, submit the data to an API
    
    // Navigate back to the main page or show success message
    navigate('/credit-card-payment');
  };

  const handleCancel = () => {
    // Go back to the service type page
    navigate('/credit-card-payment/service-type', { 
      state: { 
        category: selectedCategory,
        provider: selectedProvider 
      } 
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Credit Card Payment Configuration</Title>
        
        {/* Stepper */}
        <div style={{ margin: `${token.marginLG}px 0` }}>
          <Steps
            size="small"
            current={3}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Update Payment Configuration</Title>
          
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={{
              category: selectedCategory,
              provider: selectedProvider,
              serviceType: selectedServiceType,
              merchantId: '',
              terminalId: ''
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
                  name="serviceType"
                  label="Service Type"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="merchantId"
                  label="Merchant ID"
                  rules={[{ required: true, message: 'Please enter merchant ID' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="terminalId"
                  label="Terminal ID"
                  rules={[{ required: true, message: 'Please enter terminal ID' }]}
                >
                  <Input />
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

export default CreditCardPaymentUpdate;
