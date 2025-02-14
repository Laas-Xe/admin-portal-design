import React, { useState, useEffect } from "react";
import { Card, Typography, Table, Button, Modal, Form, Input, Space, Tabs, theme } from "antd";
import { EditOutlined, SaveOutlined, CloseOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd"; // Add this line to import Tooltip from antd

const { Title } = Typography;

interface GituConfigData {
  provider: string;
  type: string;
  glAccount: string;
  onlineAccount: string;
  glBranchCode: string;
  onlineAcBranchCode: string;
  glCostCenter: string;
  actions: string;
  currency: string;
}

interface GituOneTimeConfig {
  interfaceCode: string;
  fileName: string;
  externalSystem: string;
  functionId: string;
  processNo: string;
  timezone: string;
  masterStatus: string;
  masterAction: string;
  masterBranchCode: string;
  gituFileNameDatetimeFormat: string;
  uploadDetailTable: string;
  uploadMasterTable: string;
  merchantId: string;
  settlementAccountNumber: string;
  settlementFileCid: string;
}

interface EditModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (values: any) => void;
  initialValues?: GituConfigData;
}

interface GituDetailData {
  postingType: string;
  paymentMode: string;
  operation: string;
  sequenceNumber: string;
  accountType: string;
  account: string;
  mnemonicCode: string;
  transactionNarration: string;
}

const EditModal: React.FC<EditModalProps> = ({
  visible,
  onCancel,
  onSave,
  initialValues,
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [visible, initialValues, form]);

  return (
    <Modal
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>GITU Config Updates</span>
          <CloseOutlined onClick={onCancel} style={{ cursor: 'pointer' }} />
        </div>
      }
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel} style={{ 
          height: '40px',
          width: '120px',
          backgroundColor: '#E9ECEF'
        }}>
          CANCEL
        </Button>,
        <Button key="save" type="primary" onClick={() => form.submit()} style={{
          height: '40px',
          width: '120px',
          backgroundColor: '#00C853'
        }}>
          SAVE
        </Button>,
      ]}
      width={800}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSave}
        initialValues={initialValues}
      >
        <Form.Item
          label={
            <Tooltip title="Merchant/Biller">
              <span>
                Provider <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="provider"
          rules={[{ required: true, message: 'Please input provider!' }]}
        >
          <Input placeholder="Enter provider" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Type of Transaction">
              <span>
                Type <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="type"
          rules={[{ required: true, message: 'Please input type!' }]}
        >
          <Input placeholder="Enter type" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="General Ledger Account">
              <span>
                GL Account(FLD3) <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="glAccount"
          rules={[{ required: true, message: 'Please input GL Account!' }]}
        >
          <Input placeholder="Enter GL Account" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Merchant's Online Account with ADCB">
              <span>
                Debit Account Number / IBAN (FLD50) <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="debitAccount"
          rules={[{ required: true, message: 'Please input Debit Account Number / IBAN!' }]}
        >
          <Input placeholder="Enter Debit Account Number / IBAN" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="General Ledger Account Branch Code">
              <span>
                GL Branch Code <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="glBranchCode"
          rules={[{ required: true, message: 'Please input GL Branch Code!' }]}
        >
          <Input placeholder="Enter GL Branch Code" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Online account branch code (FLD196)">
              <span>
                Online A/c Branch Code(FLD196) <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="onlineAcBranchCode"
          rules={[{ required: true, message: 'Please input Online A/c Branch Code!' }]}
        >
          <Input placeholder="Enter Online A/c Branch Code" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Cost center associated with GL account">
              <span>
                GL Cost Center <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="glCostCenter"
          rules={[{ required: true, message: 'Please input GL Cost Center!' }]}
        >
          <Input placeholder="Enter GL Cost Center" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Merchant's Currency">
              <span>
                Currency <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
              </span>
            </Tooltip>
          }
          name="currency"
          rules={[{ required: true, message: 'Please input Currency!' }]}
        >
          <Input placeholder="Enter Currency" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export const GituConfig: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<GituConfigData | undefined>();
  const [oneTimeConfigForm] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [editedData, setEditedData] = useState<{ [key: string]: { mnemonicCode?: string; transactionNarration?: string } }>({});
  const [expandedRowKey, setExpandedRowKey] = useState<string | undefined>();
  const { token } = theme.useToken();

  // Define constants for dropdown options
  const accountTypes = [
    'MBME_BILL_PAYMENT',
    'FISERVE_POOL',
    'ADCB_TP_POOL',
    'ADCB_TP_INCOME',
    'ADCB_NI_POOL',
    'MBME_DONATE_TP',
    'ADCB_TP_DONATE_INCOME'
  ];

  const mnemonicCodes = ['1008', '1408', '3073'];

  const initialOneTimeConfigValues: Partial<GituOneTimeConfig> = {
    interfaceCode: 'TPSAPP',
    fileName: 'TPSAPP',
    externalSystem: 'TPSAPP',
    functionId: 'IFDGIMBU',
    processNo: '1',
    timezone: 'Asia/Dubai',
    masterStatus: 'U',
    masterAction: 'N',
    masterBranchCode: '51',
    gituFileNameDatetimeFormat: 'yyyyMMdd_hhmmss',
    uploadDetailTable: 'GITU_UPLOAD_DETAIL',
    uploadMasterTable: 'GITU_UPLOAD_MASTER',
    merchantId: '',
    settlementAccountNumber: '',
    settlementFileCid: '',
  };

  useEffect(() => {
    oneTimeConfigForm.setFieldsValue(initialOneTimeConfigValues);
  }, [oneTimeConfigForm]);

  const handleEdit = (record: GituConfigData) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(undefined);
  };

  const handleSave = (values: any) => {
    console.log('Saved values:', values);
    setIsModalVisible(false);
    setSelectedRecord(undefined);
  };

  const handleOneTimeConfigUpdate = (values: GituOneTimeConfig) => {
    console.log('One Time Config values:', values);
    // Add API call here to update the values
  };

  const columns = [
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "GL A/c",
      dataIndex: "glAccount",
      key: "glAccount",
    },
    {
      title: "Online A/c",
      dataIndex: "onlineAccount",
      key: "onlineAccount",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "GL Branch Code",
      dataIndex: "glBranchCode",
      key: "glBranchCode",
    },
    {
      title: "Online A/c Branch Code",
      dataIndex: "onlineAcBranchCode",
      key: "onlineAcBranchCode",
    },
    {
      title: "GL Cost Center",
      dataIndex: "glCostCenter",
      key: "glCostCenter",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: GituConfigData) => (
        <Button 
          type="link" 
          icon={<EditOutlined />} 
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
      ),
    },
  ];

  const data: GituConfigData[] = [
    {
      provider: "MBME",
      type: "BILL_PAYMENT",
      glAccount: "241003171",
      onlineAccount: "13834073920003",
      glBranchCode: "051",
      onlineAcBranchCode: "101",
      glCostCenter: "172",
      currency: "AED",
      actions: "",
    },
    {
      provider: "Smiles",
      type: "BILL_PAYMENT",
      glAccount: "241003172",
      onlineAccount: "13834073920004",
      glBranchCode: "052",
      onlineAcBranchCode: "102",
      glCostCenter: "173",
      currency: "AED",
      actions: "",
    },
    {
      provider: "DEWA",
      type: "BILL_PAYMENT",
      glAccount: "241003173",
      onlineAccount: "13834073920005",
      glBranchCode: "053",
      onlineAcBranchCode: "103",
      glCostCenter: "174",
      currency: "AED",
      actions: "",
    },
    {
      provider: "RAFFLE",
      type: "BILL_PAYMENT",
      glAccount: "241003174",
      onlineAccount: "13834073920006",
      glBranchCode: "054",
      onlineAcBranchCode: "104",
      glCostCenter: "175",
      currency: "AED",
      actions: "",
    },
    {
      provider: "TRANSFER",
      type: "BILL_PAYMENT",
      glAccount: "241003175",
      onlineAccount: "13834073920007",
      glBranchCode: "055",
      onlineAcBranchCode: "105",
      glCostCenter: "176",
      currency: "AED",
      actions: "",
    },
    {
      provider: "ETISALAT",
      type: "UTILITY",
      glAccount: "241003176",
      onlineAccount: "13834073920008",
      glBranchCode: "056",
      onlineAcBranchCode: "106",
      glCostCenter: "177",
      currency: "AED",
      actions: "",
    },
    {
      provider: "DU",
      type: "UTILITY",
      glAccount: "241003177",
      onlineAccount: "13834073920009",
      glBranchCode: "057",
      onlineAcBranchCode: "107",
      glCostCenter: "178",
      currency: "AED",
      actions: "",
    },
    {
      provider: "SEWA",
      type: "UTILITY",
      glAccount: "241003178",
      onlineAccount: "13834073920010",
      glBranchCode: "058",
      onlineAcBranchCode: "108",
      glCostCenter: "179",
      currency: "AED",
      actions: "",
    },
    {
      provider: "AADC",
      type: "UTILITY",
      glAccount: "241003179",
      onlineAccount: "13834073920011",
      glBranchCode: "059",
      onlineAcBranchCode: "109",
      glCostCenter: "180",
      currency: "AED",
      actions: "",
    },
    {
      provider: "ADDC",
      type: "UTILITY",
      glAccount: "241003180",
      onlineAccount: "13834073920012",
      glBranchCode: "060",
      onlineAcBranchCode: "110",
      glCostCenter: "181",
      currency: "AED",
      actions: "",
    }
  ];

  const expandedRowRender = (record: GituConfigData) => {
    const getRowKey = (row: GituDetailData) => `${record.provider}_${row.sequenceNumber}`;

    const detailColumns = [
      { title: 'Posting Type', dataIndex: 'postingType', key: 'postingType', width: '10%' },
      { title: 'Payment Mode', dataIndex: 'paymentMode', key: 'paymentMode', width: '10%' },
      { title: 'Operation', dataIndex: 'operation', key: 'operation', width: '8%' },
      { title: 'Seq No', dataIndex: 'sequenceNumber', key: 'sequenceNumber', width: '8%' },
      { title: 'Account Type', dataIndex: 'accountType', key: 'accountType', width: '25%' },
      { title: 'Account', dataIndex: 'account', key: 'account', width: '14%' },
      {
        title: 'Mnemonic Code',
        dataIndex: 'mnemonicCode',
        key: 'mnemonicCode',
        width: '10%',
        render: (_: any, row: GituDetailData) => {
          const rowKey = getRowKey(row);
          const isEditing = editingKey === rowKey;
          return isEditing ? (
            <Input
              value={editedData[rowKey]?.mnemonicCode ?? row.mnemonicCode}
              onChange={(e) => {
                setEditedData(prev => ({
                  ...prev,
                  [rowKey]: { ...prev[rowKey], mnemonicCode: e.target.value }
                }));
              }}
            />
          ) : (
            <span>{row.mnemonicCode}</span>
          );
        }
      },
      {
        title: 'Transaction Narration',
        dataIndex: 'transactionNarration',
        key: 'transactionNarration',
        width: '15%',
        render: (_: any, row: GituDetailData) => {
          const rowKey = getRowKey(row);
          const isEditing = editingKey === rowKey;
          return isEditing ? (
            <Input
              value={editedData[rowKey]?.transactionNarration ?? row.transactionNarration}
              onChange={(e) => {
                setEditedData(prev => ({
                  ...prev,
                  [rowKey]: { ...prev[rowKey], transactionNarration: e.target.value }
                }));
              }}
            />
          ) : (
            <span>{row.transactionNarration}</span>
          );
        }
      },
      {
        title: 'Actions',
        key: 'actions',
        width: '10%',
        fixed: 'right',
        render: (_: any, row: GituDetailData) => {
          const rowKey = getRowKey(row);
          const isEditing = editingKey === rowKey;
          
          const handleEdit = (e: React.MouseEvent) => {
            e.stopPropagation();
            setEditingKey(rowKey);
            // Initialize edited data with current values
            setEditedData(prev => ({
              ...prev,
              [rowKey]: {
                mnemonicCode: row.mnemonicCode,
                transactionNarration: row.transactionNarration
              }
            }));
          };

          const handleSave = (e: React.MouseEvent) => {
            e.stopPropagation();
            console.log('Saving changes for row:', rowKey, editedData[rowKey]);
            // TODO: Add API call to save changes
            setEditingKey('');
            setEditedData(prev => {
              const newData = { ...prev };
              delete newData[rowKey];
              return newData;
            });
          };

          const handleCancel = (e: React.MouseEvent) => {
            e.stopPropagation();
            setEditingKey('');
            setEditedData(prev => {
              const newData = { ...prev };
              delete newData[rowKey];
              return newData;
            });
          };

          return isEditing ? (
            <Space onClick={e => e.stopPropagation()}>
              <SaveOutlined
                style={{ cursor: 'pointer', color: '#00C853' }}
                onClick={handleSave}
              />
              <CloseOutlined
                style={{ cursor: 'pointer', color: '#FF5252' }}
                onClick={handleCancel}
              />
            </Space>
          ) : (
            <EditOutlined 
              style={{ cursor: 'pointer', color: token.colorPrimary }} 
              onClick={handleEdit}
            />
          );
        }
      }
    ];

    // Generate 10 rows of dummy data for the expanded table
    const detailData: GituDetailData[] = Array.from({ length: 10 }, (_, index) => ({
      postingType: Math.random() > 0.5 ? 'PAYMENT' : 'RECON',
      paymentMode: ['CC', 'DC', 'TP'][Math.floor(Math.random() * 3)],
      operation: Math.random() > 0.5 ? 'Credit' : 'Debit',
      sequenceNumber: (index + 1).toString(), // Make sequence numbers unique and sequential
      accountType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
      account: record.onlineAccount,
      mnemonicCode: mnemonicCodes[Math.floor(Math.random() * mnemonicCodes.length)],
      transactionNarration: `${record.provider} - ${Math.random() > 0.5 ? 'Credit' : 'Debit'} Transaction`,
    }));

    return (
      <div style={{ 
        margin: '0 16px', 
        background: token.colorBgContainer,
        borderRadius: token.borderRadius,
        padding: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
      }}>
        <Table
          columns={detailColumns}
          dataSource={detailData}
          pagination={{ pageSize: 5 }}
          rowKey={getRowKey}
          size="small"
          scroll={{ x: 1000 }}
          style={{ width: '100%' }}
        />
      </div>
    );
  };

  const items = [
    {
      key: '1',
      label: 'GITU Updates',
      children: (
        <div>
          <Table
            columns={columns}
            dataSource={data}
            expandable={{
              expandedRowRender,
              rowExpandable: () => true,
              expandedRowKeys: expandedRowKey ? [expandedRowKey] : [],
              onExpand: (expanded, record) => {
                setExpandedRowKey(expanded ? record.onlineAccount : undefined);
              },
            }}
            rowKey={(record) => record.onlineAccount}
            pagination={{
              pageSize: 5,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} items`,
            }}
            style={{ width: '100%' }}
          />
          <EditModal
            visible={isModalVisible}
            onCancel={handleCancel}
            onSave={handleSave}
            initialValues={selectedRecord}
          />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Common Config',
      children: (
        <div>
          <Form
            form={oneTimeConfigForm}
            layout="vertical"
            onFinish={handleOneTimeConfigUpdate}
            initialValues={initialOneTimeConfigValues}
            style={{ maxWidth: '100%' }}
          >
            <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
              <Form.Item
                label={
                  <Tooltip title="Interface code for the system">
                    <span>
                      Interface Code <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="interfaceCode"
                rules={[{ required: true, message: 'Please input Interface Code!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Interface Code" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="File name for the system">
                    <span>
                      File Name <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="fileName"
                rules={[{ required: true, message: 'Please input File Name!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter File Name" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="External system for the interface">
                    <span>
                      External System <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="externalSystem"
                rules={[{ required: true, message: 'Please input External System!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter External System" />
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
              <Form.Item
                label={
                  <Tooltip title="Function ID for the system">
                    <span>
                      Function ID <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="functionId"
                rules={[{ required: true, message: 'Please input Function ID!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Function ID" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="Process number for the system">
                    <span>
                      Process No <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="processNo"
                rules={[{ required: true, message: 'Please input Process No!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Process No" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="Master status for the system">
                    <span>
                      Master Status <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="masterStatus"
                rules={[{ required: true, message: 'Please input Master Status!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Master Status" />
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
              <Form.Item
                label={
                  <Tooltip title="Master action for the system">
                    <span>
                      Master Action <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="masterAction"
                rules={[{ required: true, message: 'Please input Master Action!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Master Action" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="Master branch code for the system">
                    <span>
                      Master Branch Code <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="masterBranchCode"
                rules={[{ required: true, message: 'Please input Master Branch Code!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Master Branch Code" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="Upload detail table for the system">
                    <span>
                      Upload Detail Table <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="uploadDetailTable"
                rules={[{ required: true, message: 'Please input Upload Detail Table!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Upload Detail Table" />
              </Form.Item>
            </div>

            <div style={{ display: 'flex', gap: token.padding, marginBottom: token.marginLG }}>
              <Form.Item
                label={
                  <Tooltip title="Upload master table for the system">
                    <span>
                      Upload Master Table <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="uploadMasterTable"
                rules={[{ required: true, message: 'Please input Upload Master Table!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Upload Master Table" />
              </Form.Item>

              <Form.Item
                label={
                  <Tooltip title="Settlement account number for the system">
                    <span>
                      Settlement Account Number <InfoCircleOutlined style={{ color: '#1890ff', marginLeft: 4 }} />
                    </span>
                  </Tooltip>
                }
                name="settlementAccountNumber"
                rules={[{ required: true, message: 'Please input Settlement Account Number!' }]}
                style={{ flex: 1 }}
              >
                <Input placeholder="Enter Settlement Account Number" />
              </Form.Item>
            </div>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit"
                style={{
                  height: '40px',
                  width: '120px',
                  backgroundColor: '#00C853'
                }}
              >
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <Title level={2}>GITU Config Updates</Title>
      <Tabs defaultActiveKey="1" items={items} />
    </Card>
  );
};
