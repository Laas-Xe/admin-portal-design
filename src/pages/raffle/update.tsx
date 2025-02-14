import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  DatePicker,
  InputNumber,
  Space,
  theme,
  notification,
} from "antd";
import { useNavigate, useParams, Navigate } from "react-router";

const { Title } = Typography;
const { TextArea } = Input;

export const UpdateRaffle: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = theme.useToken();
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (!id) {
      setHasError(true);
      setIsLoading(false);
      notification.error({
        message: "Error",
        description: "Raffle ID is required",
      });
      return;
    }

    // TODO: Replace this with actual API call
    const fetchRaffleData = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        const mockData = {
          title: "Sample Raffle",
          description: "Sample Description",
          startDate: new Date(),
          endDate: new Date(),
          maxEntries: 100,
        };
        form.setFieldsValue(mockData);
      } catch (error) {
        setHasError(true);
        notification.error({
          message: "Error",
          description: "Failed to fetch raffle data",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchRaffleData();
  }, [id, form]);

  // Redirect to raffle list if there's an error or no ID
  if (hasError || !id) {
    return <Navigate to="/raffle" replace />;
  }

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // TODO: Handle form submission for updating the raffle
    navigate("/raffle");
  };

  const onCancel = () => {
    navigate("/raffle");
  };

  return (
    <Row justify="center" style={{ padding: token.paddingLG }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Card loading={isLoading}>
          <Title level={2}>Update Raffle</Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input the raffle title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please input the description!" }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[{ required: true, message: "Please select the start date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="End Date"
              name="endDate"
              rules={[{ required: true, message: "Please select the end date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Maximum Entries"
              name="maxEntries"
              rules={[{ required: true, message: "Please input the maximum entries!" }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
