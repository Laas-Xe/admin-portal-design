import React, { useState } from "react";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  Space,
  theme,
  List,
  Modal
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

interface RaffleProduct {
  id: string;
  name: string;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  startDate: string;
  endDate: string;
  drawDate: string;
  maxUnit: number;
  minUnit: number;
  price: number;
  tpRedemption: number;
  aedToTpRate: number;
  tpRedemptionMin: number;
  tpRedemptionMax: number;
  description: string;
  prizes: {
    name: string;
    description: string;
  }[];
}

export const Raffle: React.FC = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedRaffleId, setSelectedRaffleId] = useState<string | null>(null);

  // Mock data - replace with actual API call
  const raffleProducts: RaffleProduct[] = [
    {
      id: "1",
      name: "RAFFLE_DRAW1",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "2",
      name: "RAFFLE_DRAW2",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "3",
      name: "RAFFLE_DRAW3",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "4",
      name: "RAFFLE_DRAW4",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "5",
      name: "RAFFLE_DRAW5",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "6",
      name: "RAFFLE_DRAW6",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "7",
      name: "RAFFLE_DRAW7",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "8",
      name: "RAFFLE_DRAW8",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "9",
      name: "RAFFLE_DRAW9",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    },
    {
      id: "10",
      name: "RAFFLE_DRAW10",
      createdBy: "Admin",
      createdDate: "2024-11-26",
      lastModifiedBy: "Admin",
      lastModifiedDate: "2024-11-26",
      startDate: "2024-11-25",
      endDate: "2024-12-25",
      drawDate: "2024-12-26",
      maxUnit: 3,
      minUnit: 1,
      price: 50,
      tpRedemption: 0.006,
      aedToTpRate: 125,
      tpRedemptionMin: 10,
      tpRedemptionMax: 150,
      description: "Rafa Entry",
      prizes: [
        {
          name: "Prize 1",
          description: "This is prize 1"
        },
        {
          name: "Prize 2",
          description: "This is prize 2"
        }
      ]
    }
  ];

  const handleAddProduct = () => {
    navigate("/raffle/add");
  };

  const handleDelete = (id: string) => {
    setSelectedRaffleId(id);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    // Implement actual delete logic here
    console.log(`Deleting raffle with id: ${selectedRaffleId}`);
    setDeleteModalVisible(false);
    setSelectedRaffleId(null);
  };

  return (
    <Card bordered={false}>
      <Row justify="space-between" align="middle" style={{ marginBottom: token.marginLG }}>
        <Title level={2} style={{ margin: 0 }}>Raffle Products Management</Title>
        <Button type="primary" onClick={handleAddProduct}>
          ADD NEW PRODUCT
        </Button>
      </Row>

      <Space direction="vertical" size={token.marginMD} style={{ width: "100%" }}>
        {raffleProducts.map((product) => (
          <Card
            key={product.id}
            style={{
              backgroundColor: token.colorBgContainer,
              borderRadius: token.borderRadiusLG,
              border: `1px solid ${token.colorBorderSecondary}`,
            }}
          >
            <Row justify="space-between" gutter={token.marginLG}>
              <Col flex="auto">
                <Space direction="vertical" size="small" style={{ width: "100%" }}>
                  <Row justify="space-between" align="middle">
                    <Title level={4} style={{ margin: 0 }}>{product.name}</Title>
                    <Button 
                      type="text" 
                      danger 
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(product.id)}
                    />
                  </Row>

                  <Row>
                    <Col>
                      <Text type="secondary">
                        ID: {product.id} | Created By: {product.createdBy} | {product.createdDate}
                        &nbsp;&nbsp;&nbsp;
                        Last Modified By: {product.lastModifiedBy} | {product.lastModifiedDate}
                      </Text>
                    </Col>
                  </Row>

                  <Row gutter={[token.marginLG, token.marginXS]} style={{ marginTop: token.marginSM }}>
                    <Col span={8}>
                      <Text>Start Date: {product.startDate}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>End Date: {product.endDate}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>Draw Date: {product.drawDate}</Text>
                    </Col>

                    <Col span={8}>
                      <Text>Max Unit: {product.maxUnit}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>Min Unit: {product.minUnit}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>Price: {product.price}</Text>
                    </Col>

                    <Col span={8}>
                      <Text>TP Redemption: {product.tpRedemption}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>AED to TP Rate: {product.aedToTpRate}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>Description: {product.description}</Text>
                    </Col>

                    <Col span={8}>
                      <Text>TP Redemption Min: {product.tpRedemptionMin}</Text>
                    </Col>
                    <Col span={8}>
                      <Text>TP Redemption Max: {product.tpRedemptionMax}</Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: token.marginSM }}>
                    <Col span={24}>
                      <Title level={5}>Prizes:</Title>
                      <List
                        size="small"
                        dataSource={product.prizes}
                        renderItem={(prize, index) => (
                          <List.Item>
                            {index + 1}. {prize.name} - {prize.description}
                          </List.Item>
                        )}
                      />
                    </Col>
                  </Row>
                </Space>
              </Col>
            </Row>
          </Card>
        ))}
      </Space>

      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onOk={confirmDelete}
        onCancel={() => {
          setDeleteModalVisible(false);
          setSelectedRaffleId(null);
        }}
        okText="Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>Are you sure you want to delete this raffle? This action cannot be undone.</p>
      </Modal>
    </Card>
  );
};
