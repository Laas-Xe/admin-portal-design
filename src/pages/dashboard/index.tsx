import React from "react";
import {
  Card,
  Table,
  Row,
  Col,
  Typography,
  Collapse,
  Empty,
  theme,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title } = Typography;
const { Panel } = Collapse;

interface TableItem {
  requestId: string;
  type: string;
  status: "Draft" | "Pending";
  actions?: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const handleEditClick = (
    record: TableItem,
    tableType:
      | "bonusManagementDrafts"
      | "bonusManagementPending"
      | "limitsDrafts"
      | "limitsPending"
  ) => {
    switch (tableType) {
      case "bonusManagementDrafts":
        if (record.type === "Registration") {
          navigate("/bonus/registration");
        } else if (record.type === "Transaction") {
          navigate("/bonus/transaction");
        }
        break;
      case "bonusManagementPending":
        if (record.type === "Registration") {
          navigate("/bonus/registration/checker");
        } else if (record.type === "Transaction") {
          navigate("/bonus/transaction/checker");
        }
        break;
      case "limitsDrafts":
        if (record.type === "Transaction") {
          navigate("/limits/transaction");
        } else if (record.type === "TP Redemption") {
          navigate("/limits/tp-redemption");
        }
        break;
      case "limitsPending":
        if (record.type === "Transaction") {
          navigate("/limits/transaction/checker");
        }
        break;
    }
  };

  // Common column definitions
  const getColumns = (
    tableType:
      | "bonusManagementDrafts"
      | "bonusManagementPending"
      | "limitsDrafts"
      | "limitsPending",
    showEdit: boolean = true
  ) =>
    [
      {
        title: "Request ID",
        dataIndex: "requestId",
        key: "requestId",
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status: string) => (
          <span
            style={{
              backgroundColor:
                status === "Draft"
                  ? token.colorWarningBg
                  : token.colorPrimaryBg,
              color:
                status === "Draft"
                  ? token.colorWarningText
                  : token.colorPrimaryText,
              padding: "4px 8px",
              borderRadius: token.borderRadiusLG,
              border: `1px solid ${
                status === "Draft"
                  ? token.colorWarningBorder
                  : token.colorPrimaryBorder
              }`,
            }}
          >
            {status}
          </span>
        ),
      },
      showEdit && {
        title: "Actions",
        key: "actions",
        render: (_: any, record: TableItem) => (
          <span>
            <a
              onClick={() => handleEditClick(record, tableType)}
              style={{ cursor: "pointer" }}
            >
              <EditOutlined />
            </a>
            {record.status === "Draft" && (
              <a
                onClick={() => {
                  // Add confirmation dialog here if needed
                  console.log("Delete request:", record.requestId);
                }}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: token.colorError,
                }}
              >
                <DeleteOutlined />
              </a>
            )}
          </span>
        ),
      },
    ].filter(Boolean);

  // Sample data for each section
  const bonusManagementDrafts: TableItem[] = [
    {
      requestId: "DEF-001",
      type: "Registration",
      status: "Draft",
    },
    {
      requestId: "DEF-002",
      type: "Transaction",
      status: "Draft",
    },
  ];

  const bonusManagementPending: TableItem[] = [
    {
      requestId: "ABC-123",
      type: "Registration",
      status: "Pending",
    },
    {
      requestId: "ABC-456",
      type: "Transaction",
      status: "Pending",
    },
  ];

  const limitsDrafts: TableItem[] = [
    {
      requestId: "DEF-123",
      type: "Transaction",
      status: "Draft",
    },
    {
      requestId: "DEF-001",
      type: "Transaction",
      status: "Draft",
    },
    {
      requestId: "DEF-002",
      type: "TP Redemption",
      status: "Draft",
    },
  ];

  const limitsPending: TableItem[] = [
    {
      requestId: "DEF-456",
      type: "Transaction",
      status: "Pending",
    },
    {
      requestId: "DEF-789",
      type: "Transaction",
      status: "Pending",
    },
    {
      requestId: "DEF-012",
      type: "TP Redemption",
      status: "Pending",
    },
  ];

  const reconDrafts: TableItem[] = [
    {
      requestId: "DEF-123",
      type: "GITU",
      status: "Draft",
    },
    {
      requestId: "DEF-001",
      type: "GITU",
      status: "Draft",
    },
    {
      requestId: "DEF-002",
      type: "Accounting Config",
      status: "Draft",
    },
  ];

  const reconPending: TableItem[] = [
    {
      requestId: "DEF-456",
      type: "GITU",
      status: "Pending",
    },
    {
      requestId: "XYZ-990",
      type: "GITU",
      status: "Pending",
    },
    {
      requestId: "XYZ-110",
      type: "GITU",
      status: "Pending",
    },
    {
      requestId: "XYZ-111",
      type: "Accounting Config",
      status: "Pending",
    },
    {
      requestId: "ASD-112",
      type: "Merchant Config",
      status: "Pending",
    },
  ];

  const raffleDrafts: TableItem[] = [];

  const rafflePending: TableItem[] = [
    {
      requestId: "ABC-001",
      type: "Raffle Draw 2",
      status: "Pending",
    },
    {
      requestId: "ABC-987",
      type: "Raffle Draw 3",
      status: "Pending",
    },
  ];

  const ratesDrafts: TableItem[] = [];

  const ratesPending: TableItem[] = [
    {
      requestId: "ABC-456",
      type: "Global Rates",
      status: "Pending",
    },
    {
      requestId: "ABC-243",
      type: "Global Rates",
      status: "Pending",
    },
    {
      requestId: "ABC-459",
      type: "Partner Rates",
      status: "Pending",
    },
  ];

  // Common table props
  const tableProps = {
    size: "small" as const,
    pagination: {
      size: "small" as const,
      pageSize: 5,
      showSizeChanger: false,
    },
  };

  const renderSection = (
    title: string,
    draftsData: TableItem[],
    pendingData: TableItem[]
  ) => (
    <Panel header={title} key={title}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Drafts" bordered={false}>
            {draftsData.length === 0 ? (
              <Empty />
            ) : (
              <Table
                {...tableProps}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                columns={getColumns(
                  (title.toLowerCase().replace(" ", "") + "Drafts") as any
                )}
                dataSource={draftsData}
                rowKey="requestId"
              />
            )}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Pending" bordered={false}>
            {pendingData.length === 0 ? (
              <Empty />
            ) : (
              <Table
                {...tableProps}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                columns={getColumns(
                  (title.toLowerCase().replace(" ", "") + "Pending") as any
                )}
                dataSource={pendingData}
                rowKey="requestId"
              />
            )}
          </Card>
        </Col>
      </Row>
    </Panel>
  );

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Dashboard</Title>
      <Collapse defaultActiveKey={["Bonus Management"]}>
        <Panel header="Bonus Management" key="1">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="Drafts" bordered={false}>
                <Table
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  columns={getColumns("bonusManagementDrafts")}
                  dataSource={bonusManagementDrafts}
                  pagination={false}
                  rowKey="requestId"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Pending" bordered={false}>
                <Table
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  columns={getColumns("bonusManagementPending")}
                  dataSource={bonusManagementPending}
                  pagination={false}
                  rowKey="requestId"
                />
              </Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="Limits" key="2">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title="Drafts" bordered={false}>
                <Table
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  columns={getColumns("limitsDrafts")}
                  dataSource={limitsDrafts}
                  pagination={false}
                  rowKey="requestId"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Pending" bordered={false}>
                <Table
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  columns={getColumns("limitsPending")}
                  dataSource={limitsPending}
                  pagination={false}
                  rowKey="requestId"
                />
              </Card>
            </Col>
          </Row>
        </Panel>
        {renderSection("Recon", reconDrafts, reconPending)}
        {renderSection("Raffle", raffleDrafts, rafflePending)}
        {renderSection("Rates", ratesDrafts, ratesPending)}
      </Collapse>
    </div>
  );
};

export { Dashboard };
