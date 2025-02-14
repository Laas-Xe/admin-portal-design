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
} from "antd";
import { useNavigate } from "react-router";

const { Title } = Typography;
const { Panel } = Collapse;

const TransactionLimits: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

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
      <Title level={2}>Transaction Limits</Title>
      <Form 
        layout="vertical" 
        form={form}
        style={{ marginTop: "20px" }}
      >
        <Collapse defaultActiveKey={['daily']}>
          {/* Daily Section */}
          <Panel header="Daily" key="daily">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="dailyAttempts"
                  rules={[{ required: true, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="dailyAmount"
                  rules={[
                    { required: true, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* Weekly Section */}
          <Panel header="Weekly" key="weekly">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="weeklyAttempts"
                  rules={[{ required: true, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="weeklyAmount"
                  rules={[
                    { required: true, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* Monthly Section */}
          <Panel header="Monthly" key="monthly">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="monthlyAttempts"
                  rules={[{ required: true, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="monthlyAmount"
                  rules={[
                    { required: true, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Panel>

          {/* Yearly Section */}
          <Panel header="Yearly" key="yearly">
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item 
                  label="No of Attempts"
                  name="yearlyAttempts"
                  rules={[{ required: true, message: 'Please enter number of attempts' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Enter number of attempts"
                    min={0}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Amount"
                  name="yearlyAmount"
                  rules={[
                    { required: true, message: 'Please enter amount' },
                    { type: 'number', min: 0, message: 'Amount must be greater than or equal to 0' }
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    placeholder="Enter amount"
                    formatter={value => `AED ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/AED\s?|(,*)/g, '')}
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
