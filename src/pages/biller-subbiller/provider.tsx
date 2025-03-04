import React, { useState, useEffect } from 'react';
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
    title: 'Update',
  },
];

// Define providers for Telecom category
// In a real app, this would come from an API based on the selected category
const providers = [
  'Du',
  'Etisalat'
];

export const BillerSubBillerProvider: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  
  // Get the selected category from location state or use a default
  const selectedCategory = location.state?.category || 'Telecom';

  const handleProviderSelect = (provider: string) => {
    setSelectedProvider(provider);
  };

  const handleNext = () => {
    if (selectedProvider) {
      console.log('Selected provider:', selectedProvider);
      // Navigate to the next step (Update)
      navigate('/biller-subbiller/update', { 
        state: { 
          category: selectedCategory,
          provider: selectedProvider 
        } 
      });
    }
  };

  const handleCancel = () => {
    // Go back to the categories page
    navigate('/biller-subbiller');
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
        <Title level={3}>Biller / Sub-Biller IDs</Title>
        
        {/* Stepper */}
        <div style={{ margin: `${token.marginLG}px 0` }}>
          <Steps
            size="small"
            current={1}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Providers</Title>
          
          <Row gutter={[16, 16]} style={{ marginTop: token.marginMD }}>
            {providers.map((provider) => (
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

export default BillerSubBillerProvider;
