import React, { useState, useEffect } from 'react';
import {
  Card,
  Input,
  Button,
  Space,
  Typography,
  Form,
  Select,
  DatePicker,
  theme,
  Alert
} from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title } = Typography;

interface TransactionBonusFormData {
  amount: string;
  numberOfTransactions: string;
  duration: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs;
}

export const TransactionBonus: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const [isActive, setIsActive] = useState(false);

  const initialValues: Partial<TransactionBonusFormData> = {
    amount: '1000',
    numberOfTransactions: '5',
    duration: 'monthly',
    startDate: dayjs('2024-11-15'),
    endDate: dayjs('2025-11-24')
  };

  useEffect(() => {
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
          <Title level={4}>Transaction Bonus Management - MAKER</Title>
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
        <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
          <Form.Item
            label={<span style={{ color: token.colorTextSecondary }}>Amount (AED)</span>}
            name="amount"
            rules={[{ required: true, message: 'Please input Amount' }]}
            style={{ flex: 1 }}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: token.colorTextSecondary }}>No. of Transactions</span>}
            name="numberOfTransactions"
            rules={[{ required: true, message: 'Please input Number of Transactions' }]}
            style={{ flex: 1 }}
          >
            <Input type="number" />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
          <Form.Item
            label={<span style={{ color: token.colorTextSecondary }}>Duration</span>}
            name="duration"
            rules={[{ required: true, message: 'Please select Duration' }]}
            style={{ flex: 1 }}
          >
            <Select
              style={{ width: '100%' }}
              options={[
                { value: 'monthly', label: 'Monthly' },
                { value: 'quarterly', label: 'Quarterly' },
                { value: 'yearly', label: 'Yearly' },
              ]}
            />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
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
