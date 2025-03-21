import React, { useState } from "react";
import { 
  Typography, 
  Card, 
  Form, 
  Input, 
  Button, 
  Space, 
  Switch, 
  Divider, 
  Row, 
  Col,
  Tooltip
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title } = Typography;

interface ModulePermission {
  name: string;
  maker: boolean;
  checker: boolean;
}

export const CreateRole: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  // Sample modules data - in a real application, this would come from an API
  const [modules, setModules] = useState<ModulePermission[]>([
    { name: "Module 1", maker: false, checker: false },
    { name: "Module 2", maker: false, checker: false },
    { name: "Module 3", maker: false, checker: false },
    { name: "Bonus", maker: false, checker: false },
    { name: "Recon", maker: false, checker: false },
    { name: "Raffle", maker: false, checker: false },
    { name: "Limits", maker: false, checker: false },
    { name: "Reports", maker: false, checker: false },
    { name: "Rates", maker: false, checker: false },
    { name: "OTP Locking", maker: false, checker: false },
    { name: "Cooling Period", maker: false, checker: false },
    { name: "Device De-linking", maker: false, checker: false },
    { name: "Biller & Sub Biller ID", maker: false, checker: false },
  ]);

  const handlePermissionChange = (index: number, type: 'maker' | 'checker', checked: boolean) => {
    const updatedModules = [...modules];
    
    // Update the selected toggle
    updatedModules[index][type] = checked;
    
    // If turning on maker, turn off checker
    if (type === 'maker' && checked) {
      updatedModules[index].checker = false;
    }
    
    // If turning on checker, turn off maker
    if (type === 'checker' && checked) {
      updatedModules[index].maker = false;
    }
    
    setModules(updatedModules);
  };

  const handleSubmit = (values: any) => {
    // Combine form values with module permissions
    const roleData = {
      name: values.roleName,
      permissions: modules
    };
    
    // In a real application, you would send this data to an API
    console.log("Submitting role data:", roleData);
    
    // Navigate back to role management page
    navigate("/role-management");
  };

  const handleCancel = () => {
    navigate("/role-management");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <div style={{ marginBottom: "20px" }}>
          <Space>
            <Button 
              icon={<ArrowLeftOutlined />} 
              onClick={handleCancel}
              type="link"
            />
            <Title level={4}>Create Role</Title>
          </Space>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="roleName"
            label="Role Name"
            rules={[{ required: true, message: "Please enter role name" }]}
          >
            <Input placeholder="Enter role name" style={{ maxWidth: "400px" }} />
          </Form.Item>

          <Divider style={{ margin: "24px 0" }} />
          
          <div style={{ marginBottom: "16px" }}>
            <Typography.Text type="secondary">
              Note: Maker and Checker roles are mutually exclusive. Enabling one will automatically disable the other.
            </Typography.Text>
          </div>

          {modules.map((module, index) => (
            <Row key={module.name} style={{ marginBottom: "16px" }}>
              <Col span={8}>
                <Typography.Text strong>{module.name}</Typography.Text>
              </Col>
              <Col span={8}>
                <Tooltip title="Maker role can create and edit">
                  <Space>
                    <Switch
                      checked={module.maker}
                      onChange={(checked) => handlePermissionChange(index, 'maker', checked)}
                      size="small"
                    />
                    <Typography.Text>Maker</Typography.Text>
                  </Space>
                </Tooltip>
              </Col>
              <Col span={8}>
                <Tooltip title="Checker role can approve or reject">
                  <Space>
                    <Switch
                      checked={module.checker}
                      onChange={(checked) => handlePermissionChange(index, 'checker', checked)}
                      size="small"
                    />
                    <Typography.Text>Checker</Typography.Text>
                  </Space>
                </Tooltip>
              </Col>
            </Row>
          ))}

          <Divider style={{ margin: "24px 0" }} />

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
              <Button onClick={handleCancel}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateRole;
