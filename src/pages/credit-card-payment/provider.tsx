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

// Define providers
// In a real app, this would come from an API based on the selected category
const providers = {
  'Credit': ['Visa', 'Mastercard', 'American Express'],
  'Debit': ['Visa Debit', 'Mastercard Debit', 'RuPay'],
  'Prepaid': ['Visa Prepaid', 'Mastercard Prepaid']
};

export const CreditCardPaymentProvider: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  
  // Get the selected category from location state or use default
  const selectedCategory = location.state?.category || 'Credit';
  
  // Get providers for the selected category
  const categoryProviders = providers[selectedCategory as keyof typeof providers] || [];

  const handleProviderSelect = (provider: string) => {
    setSelectedProvider(provider);
  };

  const handleNext = () => {
    if (selectedProvider) {
      console.log('Selected provider:', selectedProvider);
      // Navigate to the service type page with the selected category and provider
      navigate('/credit-card-payment/service-type', { 
        state: { 
          category: selectedCategory,
          provider: selectedProvider 
        } 
      });
    }
  };

  const handleCancel = () => {
    // Go back to the categories page
    navigate('/credit-card-payment');
  };

  // Get card styles based on selection state and theme
  const getCardStyle = (provider: string) => {
    const isSelected = selectedProvider === provider;
    
    return {
      backgroundColor: isSelected ? token.colorPrimaryBg : token.colorBgContainer,
      borderColor: isSelected ? token.colorPrimary : token.colorBorderSecondary,
      cursor: 'pointer',
      textAlign: 'center' as const,
      height: '100%'
    };
  };

  // Get text style based on selection state and theme
  const getTextStyle = (provider: string) => {
    const isSelected = selectedProvider === provider;
    
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
            current={1}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Providers for {selectedCategory}</Title>
          
          <Row gutter={[16, 16]} style={{ marginTop: token.marginMD }}>
            {categoryProviders.map((provider) => (
              <Col xs={24} sm={12} key={provider}>
                <Card
                  hoverable
                  style={getCardStyle(provider)}
                  bodyStyle={{
                    padding: token.paddingMD,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '80px'
                  }}
                  onClick={() => handleProviderSelect(provider)}
                >
                  <Typography.Text
                    strong
                    style={getTextStyle(provider)}
                  >
                    {provider}
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
                disabled={!selectedProvider}
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

export default CreditCardPaymentProvider;
