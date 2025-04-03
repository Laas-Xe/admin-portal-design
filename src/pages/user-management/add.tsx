import React, { useState } from "react";
import { 
  Typography, 
  Card, 
  Form, 
  Input, 
  Button, 
  Space, 
  Select,
  Row,
  Col,
  Table,
  Divider
} from "antd";
import { ArrowLeftOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title } = Typography;
const { Option } = Select;

interface User {
  id: string;
  email: string;
  fullName: string;
  department: string;
}

interface Role {
  id: string;
  name: string;
}

interface UserRole {
  id: string;
  role: Role;
}

export const AddUser: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [searchEmail, setSearchEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [currentRole, setCurrentRole] = useState<string>("");

  // Sample roles data - in a real application, this would come from an API
  const availableRoles: Role[] = [
    { id: "1", name: "Admin" },
    { id: "2", name: "Manager" },
    { id: "3", name: "Operator" },
    { id: "4", name: "Viewer" },
    { id: "5", name: "Approver" },
    { id: "6", name: "Auditor" },
    { id: "7", name: "Support" },
  ];
  


  const handleSearch = () => {
    // In a real application, you would call an API to search for the user
    setIsSearching(true);
    setSelectedUser(null);
    setUserRoles([]);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      
      // For demo purposes, generate search results
      if (searchEmail.includes("adcb")) {
        const results: User[] = [
          {
            id: "1",
            email: searchEmail,
            fullName: "John Smith",
            department: "IT Department"
          }
        ];
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 500);
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setSearchResults([]);
  };

  const handleAddRole = () => {
    if (!currentRole || !selectedUser) return;
    
    const role = availableRoles.find(r => r.id === currentRole);
    if (!role) return;
    
    // Check if this role already exists
    const exists = userRoles.some(
      ur => ur.role.id === currentRole
    );
    
    if (!exists) {
      const newUserRole: UserRole = {
        id: `${Date.now()}`, // Generate a unique ID
        role: role
      };
      
      setUserRoles([...userRoles, newUserRole]);
      setCurrentRole("");
    }
  };

  const handleRemoveRole = (roleId: string) => {
    setUserRoles(userRoles.filter(ur => ur.id !== roleId));
  };

  const handleSubmit = () => {
    // In a real application, you would call an API to add the user with roles
    console.log("Adding user:", selectedUser);
    console.log("Assigned roles:", userRoles);
    
    // Navigate back to user management page
    navigate("/user-management");
  };

  const handleCancel = () => {
    navigate("/user-management");
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
            <Title level={4}>Add User</Title>
          </Space>
        </div>

        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Email Address"
            required
          >
            <Row gutter={16}>
              <Col span={16}>
                <Input 
                  placeholder="Enter ADCB email address" 
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col span={8}>
                <Button 
                  type="primary" 
                  onClick={handleSearch}
                  loading={isSearching}
                  disabled={!searchEmail}
                  style={{ width: '100%' }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Item>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <Typography.Text strong>Search Results</Typography.Text>
              <Table 
                dataSource={searchResults}
                rowKey="id"
                pagination={false}
                style={{ marginTop: "10px" }}
              >
                <Table.Column title="Email" dataIndex="email" key="email" />
                <Table.Column title="Full Name" dataIndex="fullName" key="fullName" />
                <Table.Column title="Department" dataIndex="department" key="department" />
                <Table.Column 
                  title="Action" 
                  key="action"
                  render={(_, record: User) => (
                    <Button 
                      type="primary" 
                      size="small"
                      onClick={() => handleSelectUser(record)}
                    >
                      Select
                    </Button>
                  )}
                />
              </Table>
            </div>
          )}

          {/* Selected User */}
          {selectedUser && (
            <>
              <Divider orientation="left">Selected User</Divider>
              <div style={{ marginBottom: "20px" }}>
                <Row>
                  <Col span={24}>
                    <Typography.Text strong>Email: </Typography.Text>
                    <Typography.Text>{selectedUser.email}</Typography.Text>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Typography.Text strong>Name: </Typography.Text>
                    <Typography.Text>{selectedUser.fullName}</Typography.Text>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Typography.Text strong>Department: </Typography.Text>
                    <Typography.Text>{selectedUser.department}</Typography.Text>
                  </Col>
                </Row>
              </div>

              <Divider orientation="left">Assign Roles</Divider>
              
              {/* Role Assignment */}
              <div style={{ marginBottom: "20px" }}>
                <Row gutter={16} align="middle">
                  <Col span={20}>
                    <Select
                      placeholder="SELECT ROLE"
                      style={{ width: '100%' }}
                      value={currentRole || undefined}
                      onChange={(value) => setCurrentRole(value)}
                    >
                      {availableRoles.map(role => (
                        <Option key={role.id} value={role.id}>
                          {role.name}
                        </Option>
                      ))}
                    </Select>
                  </Col>
                  <Col span={4}>
                    <Button 
                      type="primary" 
                      icon={<PlusOutlined />} 
                      onClick={handleAddRole}
                      disabled={!currentRole}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </div>

              {/* Assigned Roles */}
              {userRoles.length > 0 && (
                <div style={{ marginBottom: "20px" }}>
                  <Typography.Text strong>Assigned Roles:</Typography.Text>
                  <Table 
                    dataSource={userRoles}
                    rowKey="id"
                    pagination={false}
                    style={{ marginTop: "10px" }}
                  >
                    <Table.Column 
                      title="Role" 
                      key="role" 
                      render={(_, record: UserRole) => record.role.name}
                    />

                    <Table.Column 
                      title="Action" 
                      key="action"
                      render={(_, record: UserRole) => (
                        <Button 
                          type="text" 
                          danger
                          size="small"
                          onClick={() => handleRemoveRole(record.id)}
                        >
                          Remove
                        </Button>
                      )}
                    />
                  </Table>
                </div>
              )}

              <Form.Item>
                <Space>
                  <Button 
                    type="primary" 
                    onClick={handleSubmit}
                    disabled={userRoles.length === 0}
                  >
                    Add User
                  </Button>
                  <Button onClick={handleCancel}>
                    Cancel
                  </Button>
                </Space>
              </Form.Item>
            </>
          )}
        </Form>
      </Card>
    </div>
  );
};

export default AddUser;
