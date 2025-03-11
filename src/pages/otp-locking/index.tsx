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
  Tooltip,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
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
        <Title level={3}>OTP Locking</Title>

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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputNumber style={{ width: '100%' }} min={1} />
                    <Tooltip title="The maximum number of consecutive failed OTP attempts allowed during registration, login with new device, forgot username, or Smart PIN reset before the account is temporarily locked.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="lockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The duration for which the account will remain locked after exceeding the maximum number of allowed attempts. During this period, the user cannot attempt to login or reset credentials.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The time period after which the count of failed attempts will reset to zero. This helps users regain access after the specified period without requiring manual intervention.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputNumber style={{ width: '100%' }} min={1} />
                    <Tooltip title="The maximum number of consecutive failed CID verification attempts allowed before the CID functionality is temporarily locked.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking Period"
                  name="cidLockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The duration for which the CID functionality will remain locked after exceeding the maximum number of allowed attempts. During this period, the user cannot attempt to use CID verification.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The time period after which the count of failed CID attempts will reset to zero. This helps users regain access to CID functionality after the specified period without requiring manual intervention.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputNumber style={{ width: '100%' }} min={1} />
                    <Tooltip title="The maximum number of consecutive failed OTP attempts allowed for card linking, biller payments, and touchpoints modules before the functionality is temporarily locked.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Locking period"
                  name="paymentLockingPeriod"
                  rules={[{ required: true, message: 'Please select locking period' }]}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The duration for which payment functionality will remain locked after exceeding the maximum number of allowed OTP attempts. During this period, the user cannot attempt to make payments.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputNumber style={{ width: '100%' }} min={1} />
                    <Tooltip title="The maximum number of times a user can request to resend an OTP within a single session before being temporarily restricted from requesting additional OTPs.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Resend timer"
                  name="resendTimer"
                  rules={[{ required: true, message: 'Please select resend timer' }]}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The minimum waiting period required between consecutive OTP resend requests. This helps prevent abuse of the OTP system and reduces the load on the authentication servers.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TimePicker style={{ width: '100%' }} format="HH:mm:ss" showNow={false} />
                    <Tooltip title="The time period after which the count of failed payment-related OTP attempts will reset to zero. This helps users regain access to payment functionality after the specified period without requiring manual intervention.">
                      <InfoCircleOutlined style={{ marginLeft: 8, color: token.colorPrimary }} />
                    </Tooltip>
                  </div>
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
