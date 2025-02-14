import React from 'react';
import {
  Card,
  Typography,
  Form,
  InputNumber,
  Button,
  Row,
  Col,
  Space,
} from 'antd';
import { useNavigate } from 'react-router';

const { Title } = Typography;

interface TPRedemptionFormData {
  tpLimit: number;
}

const TPRedemption: React.FC = () => {
  const [form] = Form.useForm<TPRedemptionFormData>();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSaveAsDraft = () => {
    form.validateFields().then((values) => {
      console.log('Saving as draft:', values);
      // Add API call here
    });
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log('Submitting:', values);
      // Add API call here
    });
  };

  return (
    <Card>
      <Title level={2}>TP Redemption Limits</Title>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ tpLimit: 0 }}
        style={{ marginTop: "20px" }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="TP Limit per Transaction"
              name="tpLimit"
              rules={[
                { required: true, message: 'Please input TP limit' },
                { type: 'number', min: 0, message: 'TP limit must be positive' }
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Enter TP limit"
                min={0}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end" style={{ marginTop: 24 }}>
          <Space>
            <Button onClick={handleCancel}>
              CANCEL
            </Button>
            <Button
              type="primary"
              onClick={handleSaveAsDraft}
              style={{ backgroundColor: '#1890ff' }}
            >
              SAVE AS DRAFT
            </Button>
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{ backgroundColor: '#52c41a' }}
            >
              SUBMIT
            </Button>
          </Space>
        </Row>
      </Form>
    </Card>
  );
};

export { TPRedemption };
