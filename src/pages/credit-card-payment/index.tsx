import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  theme,
  Space
} from 'antd';
import { useNavigate } from 'react-router';

const { Title } = Typography;
const { useToken } = theme;

// Define categories
const categories = [
  'Credit',
  'Debit',
  'Prepaid'
];

export const CreditCardPayment: React.FC = () => {
  const { token } = useToken();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNext = () => {
    if (selectedCategory) {
      console.log('Selected category:', selectedCategory);
      // Navigate to the provider page with the selected category
      navigate('/credit-card-payment/provider', { state: { category: selectedCategory } });
    }
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
        <Title level={3}>Credit Card Payment Configuration</Title>
        
        <div style={{ marginTop: token.marginLG }}>
          <Title level={5}>Categories</Title>
          
          <Row gutter={[16, 16]} style={{ marginTop: token.marginMD }}>
            {categories.map((category) => (
              <Col xs={24} sm={12} key={category}>
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

export default CreditCardPayment;
