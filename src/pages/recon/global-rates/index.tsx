import React from 'react';
import {
  Card,
  Button,
  Typography,
  Form,
  InputNumber,
  theme,
} from 'antd';

const { Title } = Typography;

interface GlobalRatesFormData {
  globalTPToAEDRatio: number;
}

export const GlobalRates: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  // Initial dummy data
  const initialValues: GlobalRatesFormData = {
    globalTPToAEDRatio: 0.25,
  };

  const handleCancel = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log('Saving:', values);
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Global Rates</Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          <Form.Item
            label="Global TP to AED Ratio"
            name="globalTPToAEDRatio"
            rules={[
              { required: true, message: 'Please enter the Global TP to AED Ratio' },
            ]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              step={0.01}
              precision={2}
              placeholder="Enter ratio"
            />
          </Form.Item>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: token.marginSM }}>
            <Button onClick={handleCancel}>
              CANCEL
            </Button>
            <Button type="primary" onClick={handleSave}>
              SAVE
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default GlobalRates;
