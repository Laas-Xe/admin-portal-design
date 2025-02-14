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
} from "antd";
import { useNavigate } from "react-router";

const { Title } = Typography;
const { TextArea } = Input;

export const AddRaffle: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // Handle form submission
  };

  const onCancel = () => {
    navigate("/raffle");
  };

  return (
    <Card bordered={false}>
      <Title level={2}>Add New Raffle</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: token.marginLG }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter raffle name" }]}
        >
          <Input placeholder="Enter raffle name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <TextArea
            rows={4}
            placeholder="Enter description"
          />
        </Form.Item>

        <Row gutter={token.marginMD}>
          <Col span={8}>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: "Please select start date" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true, message: "Please select end date" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="drawDate"
              label="Draw Date"
              rules={[{ required: true, message: "Please select draw date" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={token.marginMD}>
          <Col span={8}>
            <Form.Item
              name="maxUnit"
              label="Max Unit"
              rules={[{ required: true, message: "Please enter max unit" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                placeholder="Enter max unit"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="minUnit"
              label="Min Unit"
              rules={[{ required: true, message: "Please enter min unit" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                placeholder="Enter min unit"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: "Please enter price" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="Enter price"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={token.marginMD}>
          <Col span={12}>
            <Form.Item
              name="tpRedemption"
              label="TP Redemption"
              rules={[{ required: true, message: "Please enter TP redemption" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                step={0.001}
                placeholder="Enter TP redemption"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="aedToTpRate"
              label="AED to TP Rate"
              rules={[{ required: true, message: "Please enter AED to TP rate" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="Enter AED to TP rate"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={token.marginMD}>
          <Col span={12}>
            <Form.Item
              name="tpRedemptionMin"
              label="TP Redemption Min"
              rules={[{ required: true, message: "Please enter TP redemption minimum" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="Enter TP redemption minimum"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="tpRedemptionMax"
              label="TP Redemption Max"
              rules={[{ required: true, message: "Please enter TP redemption maximum" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                placeholder="Enter TP redemption maximum"
              />
            </Form.Item>
          </Col>
        </Row>

        <Title level={4} style={{ marginTop: token.marginLG }}>Prizes</Title>
        <Form.List name="prizes" initialValue={[{}]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Row key={key} gutter={token.marginMD} align="bottom">
                  <Col flex="auto">
                    <Form.Item
                      {...restField}
                      name={[name, 'label']}
                      label="Prize Label"
                      rules={[{ required: true, message: 'Please enter prize label' }]}
                    >
                      <Input placeholder="Enter prize label" />
                    </Form.Item>
                  </Col>
                  <Col flex="none">
                    <Form.Item>
                      {fields.length > 1 && (
                        <Button 
                          type="text" 
                          danger 
                          onClick={() => remove(name)}
                          icon={<span>×</span>}
                        />
                      )}
                    </Form.Item>
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<span>+</span>}
                >
                  Add Prize
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Row justify="end" style={{ marginTop: token.marginLG }}>
          <Space>
            <Button onClick={onCancel}>
              CANCEL
            </Button>
            <Button type="primary" htmlType="submit">
              SAVE
            </Button>
          </Space>
        </Row>
      </Form>
    </Card>
  );
};
