import React from 'react';
import {
  Card,
  Button,
  Typography,
  Form,
  TimePicker,
  theme,
} from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Title } = Typography;

interface CoolingPeriodFormData {
  coolingPeriod: Dayjs;
}

export const CoolingPeriod: React.FC = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();

  // Initial dummy data
  const initialValues: CoolingPeriodFormData = {
    coolingPeriod: dayjs().hour(0).minute(0).second(0),
  };

  const handleCancel = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        coolingPeriod: values.coolingPeriod.format('HH:mm:ss'),
      };
      console.log('Saving:', formattedValues);
    });
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Card>
        <Title level={3}>Cooling off Period</Title>

        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
        >
          <Form.Item
            label="Time range for Cooling Period"
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
