import React, { useState, useEffect } from 'react';
import {
  Card,
  Input,
  Button,
  Space,
  Typography,
  Form,
  theme,
  DatePicker,
  Alert
} from 'antd';
import dayjs from 'dayjs';

const { Title } = Typography;

interface RegistrationBonusFormData {
  billerId: string;
  subBillerId: string;
  bonusValue: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
}

export const RegistrationBonus: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const [isActive, setIsActive] = useState(false);

  const initialValues: Partial<RegistrationBonusFormData> = {
    billerId: 'BILL123456',
    subBillerId: 'SUB789012',
    bonusValue: '500',
    startDate: dayjs('2024-11-15'),
    endDate: dayjs('2025-11-24')
  };

  React.useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form]);

  const handleSaveAsDraft = () => {
    form.validateFields().then((values) => {
      console.log('Saving as draft:', values);
    });
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log('Submitting:', values);
    });
  };

  return (
    <Card 
      style={{ 
        margin: token.marginLG,
        backgroundColor: token.colorBgContainer
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Title level={4}>Registration Bonus Management - MAKER</Title>
          <Space align="start">
            <Button
              danger
              type={isActive ? 'primary' : 'default'}
              onClick={() => !isActive && setIsActive(true)}
            >
              Stop Bonus
            </Button>
            <Alert
              message="Effectively immediately and no scheduling allowed"
              type="error"
              showIcon
              style={{ marginBottom: 0 }}
            />
          </Space>
        </Space>

        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: '100%' }}
          initialValues={initialValues}
        >
          <div style={{ display: 'flex', gap: token.padding }}>
            <Form.Item
              label={<span style={{ color: token.colorTextSecondary }}>Bonus Biller ID</span>}
              name="billerId"
              rules={[{ required: true, message: 'Please input Biller ID' }]}
              style={{ flex: 1 }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: token.colorTextSecondary }}>Bonus Sub-Biller ID</span>}
              name="subBillerId"
              rules={[{ required: true, message: 'Please input Sub-Biller ID' }]}
              style={{ flex: 1 }}
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item
            label={<span style={{ color: token.colorTextSecondary }}>Bonus Value</span>}
            name="bonusValue"
            rules={[{ required: true, message: 'Please input Bonus Value' }]}
            style={{ maxWidth: '50%' }}
          >
            <Input type="number" />
          </Form.Item>

          <div style={{ display: 'flex', gap: token.padding }}>
            <Form.Item
              label={<span style={{ color: token.colorTextSecondary }}>Start Date</span>}
              name="startDate"
              rules={[{ required: true, message: 'Please select start date' }]}
              style={{ flex: 1 }}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: token.colorTextSecondary }}>End Date</span>}
              name="endDate"
              rules={[{ required: true, message: 'Please select end date' }]}
              style={{ flex: 1 }}
            >
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </div>

          <div style={{ marginTop: token.marginLG }}>
            <Space>
              <Button onClick={handleSaveAsDraft}>
                Save as Draft
              </Button>
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Space>
          </div>
        </Form>
      </Space>
    </Card>
  );
};

export * from "./checker";
