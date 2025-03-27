import React from 'react';
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  Typography,
  Space,
  Collapse,
  InputNumber,
  Switch,
} from "antd";
import { useNavigate } from "react-router";

const { Title } = Typography;
const { Panel } = Collapse;

const TransactionLimits: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [enabledSections, setEnabledSections] = React.useState({
    daily: true,
    monthly: true,
    yearly: true,
  });

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
      // Add enabled sections to the form values
      const dataToSubmit = {
        ...values,
        enabledSections,
      };
      console.log('Submitting:', dataToSubmit);
      // Add API call here
    });
  };

  const toggleSection = (section: 'daily' | 'monthly' | 'yearly', checked: boolean) => {
    setEnabledSections(prev => ({
      ...prev,
      [section]: checked
    }));
  };

  return (
    <Card>
      <Title level={2}>Transaction Limits</Title>
      <Form 
        layout="vertical" 
        form={form}
        style={{ marginTop: "20px" }}
      >
        <Collapse defaultActiveKey={['daily']}>
          {/* Daily Section */}
          <Panel 
            header={
              <div className="flex justify-between items-center w-full pr-2" style={{ gap: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500 }}>Daily</span>
                <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                  <Switch 
                    checked={enabledSections.daily} 
                    onChange={(checked) => toggleSection('daily', checked)}
                  />
                </div>
              </div>
            } 
            key="daily"
            collapsible={enabledSections.daily ? undefined : 'disabled'}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="dailyAttempts"
                  rules={[{ required: enabledSections.daily, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                    disabled={!enabledSections.daily}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="dailyAmount"
                  rules={[
                    { required: enabledSections.daily, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                    disabled={!enabledSections.daily}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* Weekly section removed */}

          {/* Monthly Section */}
          <Panel 
            header={
              <div className="flex justify-between items-center w-full pr-2" style={{ gap: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500 }}>Monthly</span>
                <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                  <Switch 
                    checked={enabledSections.monthly} 
                    onChange={(checked) => toggleSection('monthly', checked)}
                  />
                </div>
              </div>
            } 
            key="monthly"
            collapsible={enabledSections.monthly ? undefined : 'disabled'}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="monthlyAttempts"
                  rules={[{ required: enabledSections.monthly, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                    disabled={!enabledSections.monthly}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="monthlyAmount"
                  rules={[
                    { required: enabledSections.monthly, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                    disabled={!enabledSections.monthly}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* Yearly Section */}
          <Panel 
            header={
              <div className="flex justify-between items-center w-full pr-2" style={{ gap: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500 }}>Yearly</span>
                <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                  <Switch 
                    checked={enabledSections.yearly} 
                    onChange={(checked) => toggleSection('yearly', checked)}
                  />
                </div>
              </div>
            } 
            key="yearly"
            collapsible={enabledSections.yearly ? undefined : 'disabled'}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="yearlyAttempts"
                  rules={[{ required: enabledSections.yearly, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                    disabled={!enabledSections.yearly}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="yearlyAmount"
                  rules={[
                    { required: enabledSections.yearly, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                    disabled={!enabledSections.yearly}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>
        </Collapse>

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

export { TransactionLimits };
