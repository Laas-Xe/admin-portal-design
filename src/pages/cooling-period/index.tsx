import React from 'react';
import {
  Card,
  Button,
  Typography,
  Form,
  TimePicker,
  theme,
  Row,
  Col,
  Tooltip,
} from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface CoolingPeriodFormData {
  coolingPeriod: Dayjs;
  blockStatusSyncInterval: Dayjs;
}

export const CoolingPeriod: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  // Initial dummy data
  const initialValues: CoolingPeriodFormData = {
    coolingPeriod: dayjs().hour(0).minute(0).second(0),
    blockStatusSyncInterval: dayjs().hour(1).minute(0).second(0),
  };

  const handleCancel = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        coolingPeriod: values.coolingPeriod.format('HH:mm:ss'),
        blockStatusSyncInterval: values.blockStatusSyncInterval.format('HH:mm:ss'),
      };
      console.log('Saving:', formattedValues);
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Card Cooling off Period</Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label={
                  <span>
                    Time range for Cooling Period
                    <Tooltip title="Sets the cooling period duration after which a card can be unblocked">
                      <InfoCircleOutlined style={{ marginLeft: 8 }} />
                    </Tooltip>
                  </span>
                }
                name="coolingPeriod"
                rules={[
                  { required: true, message: 'Please select cooling period' },
                ]}
              >
                <TimePicker
                  style={{ width: '100%' }}
                  format="HH:mm:ss"
                  showNow={false}
                  placeholder="Select time"
                  onChange={(time) => {
                    if (time) {
                      // Set minutes and seconds to 0
                      const adjustedTime = time.minute(0).second(0);
                      form.setFieldValue('coolingPeriod', adjustedTime);
                    }
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <span>
                    Card Block Status Sync Interval
                    <Tooltip title="Sets the time interval for syncing card block status with the system">
                      <InfoCircleOutlined style={{ marginLeft: 8 }} />
                    </Tooltip>
                  </span>
                }
                name="blockStatusSyncInterval"
                rules={[
                  { required: true, message: 'Please select sync interval' },
                ]}
              >
                <TimePicker
                  style={{ width: '100%' }}
                  format="HH:mm:ss"
                  showNow={false}
                  placeholder="Select time"
                  onChange={(time) => {
                    if (time) {
                      // Set minutes and seconds to 0
                      const adjustedTime = time.minute(0).second(0);
                      form.setFieldValue('blockStatusSyncInterval', adjustedTime);
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

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

export default CoolingPeriod;
