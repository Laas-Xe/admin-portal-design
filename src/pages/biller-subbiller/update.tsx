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
  Select,
  Switch,
  InputNumber,
  Divider,
  Alert
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
    title: 'Service Type',
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
  
  // Get the selected category, provider, and service type from location state
  const selectedCategory = location.state?.category || 'Telecom';
  const selectedProvider = location.state?.provider || 'Du';
  const selectedServiceType = location.state?.serviceType || 'Prepaid';
  
  // State for API validation result
  const [validationResult, setValidationResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    console.log('Selected category:', selectedCategory);
    console.log('Selected provider:', selectedProvider);
    console.log('Selected service type:', selectedServiceType);
    
    // Simulate API validation
    // In a real app, this would be an actual API call
    setTimeout(() => {
      // Simulate successful validation
      setValidationResult({
        success: true,
        message: 'Biller details validated successfully!'
      });
      
      // After successful validation, you would submit the data
      // and then navigate
      setTimeout(() => {
        navigate('/biller-subbiller');
      }, 2000);
    }, 1000);
  };

  const handleCancel = () => {
    // Go back to the service type page
    navigate('/biller-subbiller/service-type', { 
      state: { 
        category: selectedCategory,
        provider: selectedProvider 
      } 
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
            current={3}
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
              serviceType: selectedServiceType,
              billerCode: '',
              subBillerCode: '',
              billerMax: 10000,
              billerMin: 10,
              billerDenomination: 1,
              isPartialPaymentAllowed: false,
              tpDenomination: 1
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
                  name="billerCode"
                  label="Biller Code"
                  rules={[{ required: true, message: 'Please enter biller code' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="subBillerCode"
                  label="Sub-Biller Code"
                  rules={[{ required: true, message: 'Please enter sub-biller code' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="billerMax"
                  label="Biller Max"
                  rules={[{ required: true, message: 'Please enter biller maximum amount' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="billerMin"
                  label="Biller Min"
                  rules={[{ required: true, message: 'Please enter biller minimum amount' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={0}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="billerDenomination"
                  label="Biller Denomination"
                  rules={[{ required: true, message: 'Please enter biller denomination' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="tpDenomination"
                  label="TP Denomination"
                  rules={[{ required: true, message: 'Please enter TP denomination' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="isPartialPaymentAllowed"
                  label="Is Partial Payment Allowed"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
            </Row>

            {validationResult && (
              <Row style={{ marginBottom: token.marginMD }}>
                <Col span={24}>
                  <Alert
                    message={validationResult.message}
                    type={validationResult.success ? "success" : "error"}
                    showIcon
                  />
                </Col>
              </Row>
            )}
            
            <Divider />
            
            <Row justify="end" style={{ marginTop: token.marginLG }}>
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
