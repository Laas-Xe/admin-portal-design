import React, { useState } from "react";
import { Typography, Card, Table, Button, Space, Tag, Modal, Descriptions } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title } = Typography;

interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

export const UserManagement: React.FC = () => {
  const navigate = useNavigate();
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Sample data for users
  const users: User[] = [
    {
      id: 1,
      username: "john.doe",
      fullName: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2025-03-12 09:45:22",
    },
    {
      id: 2,
      username: "jane.smith",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2025-03-13 08:30:15",
    },
    {
      id: 3,
      username: "robert.johnson",
      fullName: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "Operator",
      status: "Inactive",
      lastLogin: "2025-03-01 14:22:45",
    },
    {
      id: 4,
      username: "sarah.williams",
      fullName: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Viewer",
      status: "Active",
      lastLogin: "2025-03-13 10:15:33",
    },
  ];

  // Handle view user details
  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setViewModalVisible(true);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = (user: User) => {
    setSelectedUser(user);
    setDeleteModalVisible(true);
  };

  // Handle actual delete
  const handleDelete = () => {
    // In a real application, you would call an API to delete the user
    console.log("Deleting user:", selectedUser?.id);
    setDeleteModalVisible(false);
  };

  // Table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: User) => (
        <Space size="middle">
          <Button 
            type="default" 
            icon={<EyeOutlined />} 
            size="small"
            onClick={() => handleViewUser(record)}
          >
            View
          </Button>
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            size="small"
          >
            Edit
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            size="small"
            onClick={() => handleDeleteConfirm(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <Title level={4}>User Management</Title>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={() => navigate("/user-management/add")}
          >
            Add New User
          </Button>
        </div>
        <Table 
          dataSource={users} 
          columns={columns} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      {/* View User Modal */}
      <Modal
        title="User Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            Close
          </Button>
        ]}
        width={700}
      >
        {selectedUser && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="ID">{selectedUser.id}</Descriptions.Item>
            <Descriptions.Item label="Username">{selectedUser.username}</Descriptions.Item>
            <Descriptions.Item label="Full Name">{selectedUser.fullName}</Descriptions.Item>
            <Descriptions.Item label="Email">{selectedUser.email}</Descriptions.Item>
            <Descriptions.Item label="Role">{selectedUser.role}</Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={selectedUser.status === "Active" ? "green" : "red"}>
                {selectedUser.status}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Last Login" span={2}>{selectedUser.lastLogin}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setDeleteModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="delete" danger type="primary" onClick={handleDelete}>
            Delete
          </Button>
        ]}
      >
        <p>Are you sure you want to delete user <strong>{selectedUser?.fullName}</strong>?</p>
        <p>This action cannot be undone.</p>
      </Modal>
    </div>
  );
};

export default UserManagement;
