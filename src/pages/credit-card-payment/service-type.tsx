import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  theme,
  Space,
  Steps
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

// Define service types based on provider
// In a real app, this would come from an API based on the selected provider
const serviceTypes = {
  'Visa': ['Domestic', 'International', 'E-commerce'],
  'Mastercard': ['Domestic', 'International', 'E-commerce'],
  'American Express': ['Domestic', 'International', 'E-commerce'],
  'Visa Debit': ['ATM', 'POS', 'E-commerce'],
  'Mastercard Debit': ['ATM', 'POS', 'E-commerce'],
  'RuPay': ['ATM', 'POS', 'E-commerce'],
  'Visa Prepaid': ['Domestic', 'International'],
  'Mastercard Prepaid': ['Domestic', 'International']
};

export const CreditCardPaymentServiceType: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>(null);
  
  // Get the selected category and provider from location state or use defaults
  const selectedCategory = location.state?.category || 'Credit';
  const selectedProvider = location.state?.provider || 'Visa';

  // Get service types for the selected provider
  const providerServiceTypes = serviceTypes[selectedProvider as keyof typeof serviceTypes] || [];

  const handleServiceTypeSelect = (serviceType: string) => {
    setSelectedServiceType(serviceType);
  };

  const handleNext = () => {
    if (selectedServiceType) {
      console.log('Selected service type:', selectedServiceType);
      // Navigate to the next step (Update)
      navigate('/credit-card-payment/update', { 
        state: { 
          category: selectedCategory,
          provider: selectedProvider,
          serviceType: selectedServiceType
        } 
      });
    }
  };

  const handleCancel = () => {
    // Go back to the provider page
    navigate('/credit-card-payment/provider', { 
      state: { category: selectedCategory } 
    });
  };

  // Get card styles based on selection state and theme
  const getCardStyle = (serviceType: string) => {
    const isSelected = selectedServiceType === serviceType;
    
    return {
      backgroundColor: isSelected ? token.colorPrimaryBg : token.colorBgContainer,
      borderColor: isSelected ? token.colorPrimary : token.colorBorderSecondary,
      cursor: 'pointer',
      textAlign: 'center' as const,
      height: '100%'
    };
  };

  // Get text style based on selection state and theme
  const getTextStyle = (serviceType: string) => {
    const isSelected = selectedServiceType === serviceType;
    
    return {
      fontSize: token.fontSizeLG,
      color: isSelected ? token.colorPrimary : token.colorText
    };
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Credit Card Payment Configuration</Title>
        
        {/* Stepper */}
        <div style={{ margin: `${token.marginLG}px 0` }}>
          <Steps
            size="small"
            current={2}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Service Types for {selectedProvider}</Title>
          
          <Row gutter={[16, 16]} style={{ marginTop: token.marginMD }}>
            {providerServiceTypes.map((serviceType) => (
              <Col xs={24} sm={12} key={serviceType}>
                <Card
                  hoverable
                  style={getCardStyle(serviceType)}
                  bodyStyle={{
                    padding: token.paddingMD,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '80px'
                  }}
                  onClick={() => handleServiceTypeSelect(serviceType)}
                >
                  <Typography.Text
                    strong
                    style={getTextStyle(serviceType)}
                  >
                    {serviceType}
                  </Typography.Text>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row justify="end" style={{ marginTop: token.marginXL }}>
            <Space>
              <Button onClick={handleCancel}>CANCEL</Button>
              <Button 
                type="primary"
                onClick={handleNext}
                disabled={!selectedServiceType}
              >
                NEXT
              </Button>
            </Space>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default CreditCardPaymentServiceType;
