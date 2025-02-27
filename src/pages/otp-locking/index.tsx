import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
  Form,
  InputNumber,
  theme,
  Row,
  Col,
  TimePicker,
  Alert,
} from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Title } = Typography;

interface OtpLockingFormData {
  // Registration & CID section
  totalAttempts: number;
  lockingPeriod: Dayjs;
  attemptsResetPeriod: Dayjs;
  // Payments section
  otpAttempts: number;
  paymentLockingPeriod: Dayjs;
  resendAttempts: number;
  resendTimer: Dayjs;
  paymentAttemptsResetPeriod: Dayjs;
  // CID section
  cidTotalAttempts: number;
  cidLockingPeriod: Dayjs;
  cidAttemptsResetPeriod: Dayjs;
}

export const OtpLocking: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  // Initial dummy data
  const initialValues: OtpLockingFormData = {
    totalAttempts: 5,
    lockingPeriod: dayjs().hour(1).minute(0).second(0),
    attemptsResetPeriod: dayjs().hour(1).minute(0).second(0),
    otpAttempts: 5,
    paymentLockingPeriod: dayjs().hour(1).minute(0).second(0),
    resendAttempts: 5,
    resendTimer: dayjs().hour(1).minute(0).second(0),
    paymentAttemptsResetPeriod: dayjs().hour(1).minute(0).second(0),
    cidTotalAttempts: 5,
    cidLockingPeriod: dayjs().hour(1).minute(0).second(0),
    cidAttemptsResetPeriod: dayjs().hour(1).minute(0).second(0),
  };

  const handleCancel = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        ...values,
        lockingPeriod: values.lockingPeriod.format('HH:mm:ss'),
        attemptsResetPeriod: values.attemptsResetPeriod.format('HH:mm:ss'),
        paymentLockingPeriod: values.paymentLockingPeriod.format('HH:mm:ss'),
        resendTimer: values.resendTimer.format('HH:mm:ss'),
        paymentAttemptsResetPeriod: values.paymentAttemptsResetPeriod.format('HH:mm:ss'),
        cidLockingPeriod: values.cidLockingPeriod.format('HH:mm:ss'),
        cidAttemptsResetPeriod: values.cidAttemptsResetPeriod.format('HH:mm:ss'),
      };
      console.log('Saving:', formattedValues);
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Locking</Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          {/* Registration & CID Section */}
          <div style={{ marginBottom: token.marginLG }}>
            <Title level={5}>Registration</Title>
            <Alert
              message="For Login New Device, Forgot Username, Smart PIN Reset"
              type="info"
              showIcon
              style={{ marginBottom: token.marginMD }}
            />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Total attempts"
                  name="totalAttempts"
                  rules={[{ required: true, message: 'Please input total attempts' }]}
                >
                  <InputNumber style={{ width: '100%' }} min={1} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="lockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Attempts reset period"
                  name="attemptsResetPeriod"
                  rules={[{ required: true, message: 'Please select attempts reset period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: token.marginSM }}>
              <Button onClick={handleCancel}>CANCEL</Button>
              <Button type="primary" onClick={handleSave}>SAVE</Button>
            </div>
          </div>

          {/* CID Section */}
          <div style={{ marginTop: token.marginXL }}>
            <Title level={5}>CID</Title>
            <Alert
              message="For CID"
              type="info"
              showIcon
              style={{ marginBottom: token.marginMD }}
            />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Total attempts"
                  name="cidTotalAttempts"
                  rules={[{ required: true, message: 'Please input total attempts' }]}
                >
                  <InputNumber style={{ width: '100%' }} min={1} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="cidLockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Attempts reset period"
                  name="cidAttemptsResetPeriod"
                  rules={[{ required: true, message: 'Please select attempts reset period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: token.marginSM }}>
              <Button onClick={handleCancel}>CANCEL</Button>
              <Button type="primary" onClick={handleSave}>SAVE</Button>
            </div>
          </div>

          {/* Payments Section */}
          <div style={{ marginTop: token.marginXL }}>
            <Title level={5}>All Other Modules</Title>
            <Alert
              message="For Card Linking, Biller Payments, Touchpoints modules"
              type="info"
              showIcon
              style={{ marginBottom: token.marginMD }}
            />
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="OTP Attempts"
                  name="otpAttempts"
                  rules={[{ required: true, message: 'Please input OTP attempts' }]}
                >
                  <InputNumber style={{ width: '100%' }} min={1} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking period"
                  name="paymentLockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Resend attempts"
                  name="resendAttempts"
                  rules={[{ required: true, message: 'Please input resend attempts' }]}
                >
                  <InputNumber style={{ width: '100%' }} min={1} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Resend timer"
                  name="resendTimer"
                  rules={[{ required: true, message: 'Please select resend timer' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Attempts reset period"
                  name="paymentAttemptsResetPeriod"
                  rules={[{ required: true, message: 'Please select attempts reset period' }]}
                >
                  <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: token.marginSM }}>
              <Button onClick={handleCancel}>CANCEL</Button>
              <Button type="primary" onClick={handleSave}>SAVE</Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default OtpLocking;
