import React from 'react';
import {
  Card,
  Typography,
  Space,
  Button,
  Select,
  DatePicker,
  theme,
  Form,
  Row,
  Col,
  Alert
} from 'antd';
import { useNavigation } from '@refinedev/core';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const reportTypes = [
  { label: 'Reconcilation', value: 'reconcilation' },
  { label: 'Payment GITU Transaction', value: 'payment_gitu' },
  { label: 'Payment Transaction', value: 'payment_transaction' },
  { label: 'LaaS User Registration', value: 'laas_registration' }
];

const providers = [
  { label: 'MBME', value: 'mbme' },
  { label: 'FINSERV', value: 'finserv' },
  { label: 'NI', value: 'ni' },
  { label: 'SMILE', value: 'smile' },
  { label: 'DEWA', value: 'dewa' }
];

export const Reports: React.FC = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const navigate = useNavigation();
  const reportType = Form.useWatch('reportType', form);

  const handleGenerate = () => {
    form.validateFields().then((values) => {
      const { reportType } = values;
      
      // Navigate to the appropriate report based on type
      switch (reportType) {
        case 'reconcilation':
          navigate.push('/reports/reconciliation');
          break;
        case 'payment_gitu':
          navigate.push('/reports/payment-gitu');
          break;
        case 'payment_transaction':
          navigate.push('/reports/payment-transaction-report');
          break;
        case 'laas_registration':
          navigate.push('/reports/laas-user-registration');
          break;
      }
    });
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Card>
      <Title level={2}>Reports</Title>
      <Form
        form={form}
        layout="vertical"
        style={{ maxWidth: '100%', padding: '24px' }}
      >
        <Row gutter={[32, 24]}>
          <Col span={12}>
            <Form.Item
              name="reportType"
              label="Report Type"
              rules={[{ required: true, message: 'Please select a report type' }]}
            >
              <Select
                placeholder="Select Report Type"
                options={reportTypes}
                style={{ width: '100%' }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, curValues) => prevValues.reportType !== curValues.reportType}
            >
              {({ getFieldValue }) => (
                <Form.Item
                  name="provider"
                  label="Provider"
                  rules={[{ required: getFieldValue('reportType') !== 'laas_registration', message: 'Please select a provider' }]}
                >
                  <Select
                    placeholder="Select Provider"
                    options={providers}
                    style={{ width: '100%' }}
                    size="large"
                    disabled={getFieldValue('reportType') === 'laas_registration'}
                  />
                </Form.Item>
              )}
            </Form.Item>
            {reportType === 'laas_registration' && (
              <Alert
                message="Not applicable for LaaS User Registration"
                type="info"
                showIcon
              />
            )}
          </Col>
          <Col span={24}>
            <Form.Item
              name="dateRange"
              label="From Date / To Date"
              rules={[{ required: true, message: 'Please select a date range' }]}
            >
              <RangePicker
                style={{ width: '100%' }}
                format="DD/MM/YYYY"
                size="large"
              />
            </Form.Item>
            <Alert
              message="Last 1 year data available only"
              type="info"
              showIcon
              style={{ marginTop: '-16px', marginBottom: '24px' }}
            />
          </Col>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Space>
              <Button size="large" onClick={handleReset}>
                RESET
              </Button>
              <Button type="primary" size="large" onClick={handleGenerate}>
                GENERATE
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Reports;
