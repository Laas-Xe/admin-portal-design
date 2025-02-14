import React, { useState } from 'react';
import {
  Card,
  Switch,
  Input,
  Button,
  Typography,
  Form,
  Space,
  InputNumber,
  theme,
  Row,
  Col,
  TimePicker,
} from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Title } = Typography;

interface OtpLockingFormData {
  applyToAll: boolean;
  registrationAttempts: number;
  registrationLockingPeriod: Dayjs;
  otherAttempts: number;
  otherLockingPeriod: Dayjs;
}

export const OtpLocking: React.FC = () => {
  const [form] = Form.useForm();
  const [applyToAll, setApplyToAll] = useState(false);
  const { token } = theme.useToken();

  // Initial dummy data
  const initialValues: OtpLockingFormData = {
    applyToAll: false,
    registrationAttempts: 5,
    registrationLockingPeriod: dayjs().hour(1).minute(0).second(0),
    otherAttempts: 5,
    otherLockingPeriod: dayjs().hour(1).minute(0).second(0),
  };

  const handleApplyToAllChange = (checked: boolean) => {
    setApplyToAll(checked);
    if (checked) {
      // When "Apply to All" is turned on, copy Registration values to Others
      const registrationValues = {
        otherAttempts: form.getFieldValue('registrationAttempts'),
        otherLockingPeriod: form.getFieldValue('registrationLockingPeriod'),
      };
      form.setFieldsValue(registrationValues);
    }
  };

  const handleCancel = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      // Convert time values to hours for API
      const formattedValues = {
        ...values,
        registrationLockingPeriod: values.registrationLockingPeriod.format('HH:mm:ss'),
        otherLockingPeriod: values.otherLockingPeriod.format('HH:mm:ss'),
      };
      console.log('Saving:', { ...formattedValues, applyToAll });
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>OTP Locking</Title>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: token.marginLG }}>
          <Title level={5} style={{ margin: 0 }}>Apply to All</Title>
          <Switch
            checked={applyToAll}
            onChange={handleApplyToAllChange}
          />
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          {/* Registration Section */}
          <Title level={5}>Registration</Title>
          <div style={{ marginBottom: token.marginLG }}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="No of Attempts"
                  name="registrationAttempts"
                  rules={[
                    { required: true, message: 'Please input number of attempts' },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                    placeholder="Enter number of attempts"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="registrationLockingPeriod"
                  rules={[
                    { required: true, message: 'Please select locking period' },
                  ]}
                >
                  <TimePicker
                    style={{ width: '100%' }}
                    format="HH:mm:ss"
                    showNow={false}
                    placeholder="Select hours"
                    onChange={(time) => {
                      if (time) {
                        // Set minutes and seconds to 0
                        const adjustedTime = time.minute(0).second(0);
                        form.setFieldValue('registrationLockingPeriod', adjustedTime);
                      }
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>

          {/* Others Section */}
          <Title level={5}>Others</Title>
          <div style={{ marginBottom: token.marginLG }}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="No of Attempts"
                  name="otherAttempts"
                  rules={[
                    { required: true, message: 'Please input number of attempts' },
                  ]}
                >
                  <InputNumber 
                    style={{ width: '100%' }}
                    min={1}
                    placeholder="Enter number of attempts"
                    disabled={applyToAll}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="otherLockingPeriod"
                  rules={[
                    { required: true, message: 'Please select locking period' },
                  ]}
                >
                  <TimePicker
                    style={{ width: '100%' }}
                    format="HH:mm:ss"
                    showNow={false}
                    placeholder="Select hours"
                    disabled={applyToAll}
                    onChange={(time) => {
                      if (time) {
                        // Set minutes and seconds to 0
                        const adjustedTime = time.minute(0).second(0);
                        form.setFieldValue('otherLockingPeriod', adjustedTime);
                      }
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>

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

export default OtpLocking;
