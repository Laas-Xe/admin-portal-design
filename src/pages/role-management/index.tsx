import React, { useState } from "react";
import { Typography, Card, Table, Button, Space, Modal, Descriptions } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined, CopyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title } = Typography;

interface Role {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const RoleManagement: React.FC = () => {
  const navigate = useNavigate();
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  // Sample data for roles
  const roles: Role[] = [
    {
      id: 1,
      name: "Admin",
      description: "Full system access",
      createdAt: "2025-02-15",
      updatedAt: "2025-03-10",
    },
    {
      id: 2,
      name: "Manager",
      description: "Access to manage users and view reports",
      createdAt: "2025-02-20",
      updatedAt: "2025-03-05",
    },
    {
      id: 3,
      name: "Operator",
      description: "Limited access to day-to-day operations",
      createdAt: "2025-02-25",
      updatedAt: "2025-03-01",
    },
    {
      id: 4,
      name: "Viewer",
      description: "Read-only access to reports and dashboards",
      createdAt: "2025-03-01",
      updatedAt: "2025-03-01",
    },
  ];

  // Handle view role details
  const handleViewRole = (role: Role) => {
    setSelectedRole(role);
    setViewModalVisible(true);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = (role: Role) => {
    setSelectedRole(role);
    setDeleteModalVisible(true);
  };

  // Handle actual delete
  const handleDelete = () => {
    // In a real application, you would call an API to delete the role
    console.log("Deleting role:", selectedRole?.id);
    setDeleteModalVisible(false);
  };

  // Handle clone/duplicate role
  const handleCloneRole = (role: Role) => {
    // In a real application, you would call an API to clone the role
    console.log("Cloning role:", role.id);
    // For demonstration, we would typically create a new role with similar properties
    // and perhaps append "(Copy)" to the name
  };

  // Table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Last Updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Role) => (
        <Space size="middle">
          <Button 
            type="default" 
            icon={<EyeOutlined />} 
            size="small"
            onClick={() => handleViewRole(record)}
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
            type="default" 
            icon={<CopyOutlined />} 
            size="small"
            onClick={() => handleCloneRole(record)}
          >
            Clone
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
          <Title level={4}>Role Management</Title>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={() => navigate("/role-management/create")}
          >
            Add New Role
          </Button>
        </div>
        <Table 
          dataSource={roles} 
          columns={columns} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      {/* View Role Modal */}
      <Modal
        title="Role Details"
        open={viewModalVisible}
        onCancel={() => setViewModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setViewModalVisible(false)}>
            Close
          </Button>
        ]}
        width={700}
      >
        {selectedRole && (
          <Descriptions bordered column={2}>
            <Descriptions.Item label="ID">{selectedRole.id}</Descriptions.Item>
            <Descriptions.Item label="Role Name">{selectedRole.name}</Descriptions.Item>
            <Descriptions.Item label="Description" span={2}>{selectedRole.description}</Descriptions.Item>
            <Descriptions.Item label="Created Date">{selectedRole.createdAt}</Descriptions.Item>
            <Descriptions.Item label="Last Updated">{selectedRole.updatedAt}</Descriptions.Item>
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
        <p>Are you sure you want to delete the <strong>{selectedRole?.name}</strong> role?</p>
        <p>This action cannot be undone and may affect users assigned to this role.</p>
      </Modal>
    </div>
  );
};

export default RoleManagement;
