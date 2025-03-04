import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  theme,
  Space,
  ConfigProvider,
  Steps
} from 'antd';
import { useNavigate } from 'react-router';

const { Title } = Typography;
const { useToken } = theme;

// Define categories for Biller/Sub-Biller IDs
const categories = [
  'Telecom',
  'Utilities',
  'Education',
  'Transport',
  'Credit Card',
  'Fines',
  'Other'
];

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

export const BillerSubBiller: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNext = () => {
    if (selectedCategory) {
      console.log('Selected category:', selectedCategory);
      // Navigate to the provider page with the selected category
      navigate('/biller-subbiller/provider', { state: { category: selectedCategory } });
    }
  };

  const handleCancel = () => {
    setSelectedCategory(null);
  };

  // Get card styles based on selection state and theme
  const getCardStyle = (category: string) => {
    const isSelected = selectedCategory === category;
    
    return {
      backgroundColor: isSelected ? token.colorPrimaryBg : token.colorBgContainer,
      borderColor: isSelected ? token.colorPrimary : token.colorBorderSecondary,
      cursor: 'pointer',
      textAlign: 'center' as const,
      height: '100%'
    };
  };

  // Get text style based on selection state and theme
  const getTextStyle = (category: string) => {
    const isSelected = selectedCategory === category;
    
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
            current={currentStep}
            items={steps}
          />
        </div>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Select Categories</Title>
          
          <Row gutter={[16, 16]} style={{ marginTop: token.marginMD }}>
            {categories.map((category) => (
              <Col xs={24} sm={12} md={8} key={category}>
                <Card
                  hoverable
                  style={getCardStyle(category)}
                  bodyStyle={{
                    padding: token.paddingMD,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '80px'
                  }}
                  onClick={() => handleCategorySelect(category)}
                >
                  <Typography.Text
                    strong
                    style={getTextStyle(category)}
                  >
                    {category}
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
                disabled={!selectedCategory}
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

export default BillerSubBiller;
