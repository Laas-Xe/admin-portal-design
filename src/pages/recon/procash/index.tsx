import React, { useState, useEffect } from "react";
import { Card, Typography, Table, Button, Modal, Form, Input, Tabs, theme, Tooltip } from "antd";
import { EditOutlined, CloseOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface ProCashData {
  provider: string;
  onlineAccount: string;
  beneficiaryAccountNumber: string;
  beneficiaryName: string;
  beneficiaryBankName: string;
  remittanceCode: string;
  paymentType: string;
  actions: string;
  beneficiaryAddress1?: string;
  beneficiaryAddress2?: string;
  beneficiaryAddress3?: string;
  beneficiaryBankAddress1?: string;
  beneficiaryBankAddress2?: string;
  beneficiaryBankAddress3?: string;
  beneficiaryBankSwiftCode?: string;
  chargesDetails?: string;
  paymentCurrency?: string;
  remittanceDetails?: string;
  paymentDetails2?: string;
  paymentDetails3?: string;
  paymentDetails4?: string;
  intermediaryBankName?: string;
  intermediaryBankAddress1?: string;
  intermediaryBankAddress2?: string;
  intermediaryBankAddress3?: string;
  intermediaryBankSwiftCode?: string;
  dealNumber?: string;
  beneBankSortCode?: string;
}

interface EditModalProps {
  visible: boolean;
  onCancel: () => void;
  onSave: (values: any) => void;
  initialValues?: ProCashData;
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
          <span>ProCash Updates</span>
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
            <span>
              Provider
              <Tooltip title="Merchant/Biller">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="provider"
          rules={[{ required: true, message: 'Please input provider!' }]}
        >
          <Input placeholder="Enter provider" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Debit Account Number / IBAN (Fld50)
              <Tooltip title="Merchant's Online Account with ADCB">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="onlineAccount"
          rules={[{ required: true, message: 'Please input online account!' }]}
        >
          <Input placeholder="Enter online account" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Account Number / IBAN(Fld59)
              <Tooltip title="IBAN or account number of the beneficiary to which the payment is to be credited. IBAN is mandatory for all UAEFTS payments.">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryAccountNumber"
          rules={[{ required: true, message: 'Please input beneficiary account number!' }]}
        >
          <Input placeholder="Enter beneficiary account number" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Name (Fld59)
              <Tooltip title="Beneficiary Name">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryName"
          rules={[{ required: true, message: 'Please input beneficiary name!' }]}
        >
          <Input placeholder="Enter beneficiary name" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Bank Name (Fld57)
              <Tooltip title="Beneficiary bank name where the account is held">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryBankName"
          rules={[{ required: true, message: 'Please input beneficiary bank name!' }]}
        >
          <Input placeholder="Enter beneficiary bank name" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Remittance Code (Fld59)
              <Tooltip title="3 character purpose of payment (PoP) as per Central Bank Remittance Code list">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="remittanceCode"
          rules={[{ required: true, message: 'Please input remittance code!' }]}
        >
          <Input placeholder="Enter remittance code" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Payment Type
              <Tooltip title={`Type of Payment – can be one of
"IFT" (Internal Fund Transfer) - within ADCB
"EFD" (External Fund Trf Domestic) – only AED within UAE via UAEFTS
"EFI" (External Fund Trf Intl.) – non ADCB, non AED within or outside
UAE via SWIFT`}>
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="paymentType"
          rules={[{ required: true, message: 'Please input payment type!' }]}
        >
          <Input placeholder="Enter payment type" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Address 1 (Fld59)
              <Tooltip title="Beneficiary Name continued (if required) or Address">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryAddress1"
        >
          <Input placeholder="Enter beneficiary address 1" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Address 2 (Fld59)
              <Tooltip title="Beneficiary Address Continued (if required)">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryAddress2"
        >
          <Input placeholder="Enter beneficiary address 2" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Address 3 (Fld59)
              <Tooltip title="Beneficiary Address Continued (if required)">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryAddress3"
        >
          <Input placeholder="Enter beneficiary address 3" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Bank Address 1 (Fld57)
              <Tooltip title="Beneficiary bank address where the account is held">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryBankAddress1"
        >
          <Input placeholder="Enter bank address 1" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Bank Address 2 (Fld57)
              <Tooltip title="Beneficiary bank address continued (if required)">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryBankAddress2"
        >
          <Input placeholder="Enter bank address 2" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Bank Address 3 (Fld57)
              <Tooltip title="Beneficiary bank address continued (if required)">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryBankAddress3"
        >
          <Input placeholder="Enter bank address 3" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Beneficiary Bank SWIFT Code / Routing Code (Fld57)
              <Tooltip title="11-character SWIFT address of the intermediary bank
8 character SWIFT address should be suffixed with “XXX”">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneficiaryBankSwiftCode"
        >
          <Input placeholder="Enter SWIFT code" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Charges Details (Fld71)
              <Tooltip title="Tooltip Dummy content">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="chargesDetails"
        >
          <Input placeholder="Enter charges details" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Payment Currency (Fld32)
              <Tooltip title="ISO Currency code for the payment or remittance currency">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="paymentCurrency"
        >
          <Input placeholder="Enter currency" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Remittance Details
              <Tooltip title="Remittance Details example : REF">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="remittanceDetails"
        >
          <Input placeholder="Enter remittance details" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Payment Details 2 (Fld70)
              <Tooltip title="Remittance details of payment for the beneficiary">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="paymentDetails2"
        >
          <Input placeholder="Enter payment details 2" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Payment Details 3 (Fld70)
              <Tooltip title="Remittance details of payment for the beneficiary">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="paymentDetails3"
        >
          <Input placeholder="Enter payment details 3" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Payment Details 4 (Fld70)
              <Tooltip title="Remittance details of payment for the beneficiary">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="paymentDetails4"
        >
          <Input placeholder="Enter payment details 4" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Intermediary Bank Name (Fld56)
              <Tooltip title="Name of the Intermediary Bank through which the payment should be routed">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="intermediaryBankName"
        >
          <Input placeholder="Enter intermediary bank" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Intermediary Bank Address 1 (Fld56)
              <Tooltip title="Address of the Intermediary Bank through which the payment should be routed">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="intermediaryBankAddress1"
        >
          <Input placeholder="Enter intermediary address 1" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Intermediary Bank Address 2 (Fld56)
              <Tooltip title="Address of the Intermediary Bank through which the payment should be routed">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="intermediaryBankAddress2"
        >
          <Input placeholder="Enter intermediary address 2" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Intermediary Bank Address 3 (Fld56)
              <Tooltip title="Address of the Intermediary Bank through which the payment should be routed">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="intermediaryBankAddress3"
        >
          <Input placeholder="Enter intermediary address 3" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Intermediary Bank SWIFT Code (Fld56)
              <Tooltip title={`11-character SWIFT address of the intermediary bank\n8 character SWIFT address should be suffixed with “XXX”`}>
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="intermediaryBankSwiftCode"
        >
          <Input placeholder="Enter intermediary SWIFT" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Deal Number
              <Tooltip title="Deal number obtained from treasury for agreed rate to be applied Payment must be approved by all signatory(s) before cut off">
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="dealNumber"
        >
          <Input placeholder="Enter deal number" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Bene Bank Sort/ABA/NEFT Code
              <Tooltip title={`For Australia (AUD) - Bank Code (6 digit)
For Canada (CAD) - Institution Number (should have preceding 0 if the number is less than 4 digits) and Transit Number (5 digit)
For Great Britain (GBP) - Sort Code (6 digit)
For India (INR) - Full Beneficiary Bank Address with IFSC Code (11 digits)
For USA (USD) - Fedwire or ABA number (9 digit) For South Africa (ZAR) - Bank Code (6 digit)`}>
                <InfoCircleOutlined style={{ marginLeft: 8 }} />
              </Tooltip>
            </span>
          }
          name="beneBankSortCode"
        >
          <Input placeholder="Enter sort code" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

interface ProCashConfigData {
  settlementFileCid: string;
}

export const ProCashUpdates: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<ProCashData | undefined>();
  const [configForm] = Form.useForm();
  const { token } = theme.useToken();

  const initialConfigValues: ProCashConfigData = {
    settlementFileCid: '13834073',
  };

  useEffect(() => {
    configForm.setFieldsValue(initialConfigValues);
  }, [configForm]);

  const handleEdit = (record: ProCashData) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(undefined);
  };

  const handleSave = (values: ProCashData) => {
    console.log('Saved values:', values);
    setIsModalVisible(false);
    setSelectedRecord(undefined);
  };

  const handleConfigUpdate = (values: ProCashConfigData) => {
    console.log('Config values:', values);
    // Add API call here to update the values
  };

  const columns = [
    {
      title: "Provider",
      dataIndex: "provider",
      key: "provider",
    },
    {
      title: "Online A/c",
      dataIndex: "onlineAccount",
      key: "onlineAccount",
    },
    {
      title: "Beneficiary Account Number / IBAN",
      dataIndex: "beneficiaryAccountNumber",
      key: "beneficiaryAccountNumber",
    },
    {
      title: "Beneficiary Name",
      dataIndex: "beneficiaryName",
      key: "beneficiaryName",
    },
    {
      title: "Beneficiary Bank Name",
      dataIndex: "beneficiaryBankName",
      key: "beneficiaryBankName",
    },
    {
      title: "Remittance Code",
      dataIndex: "remittanceCode",
      key: "remittanceCode",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record: ProCashData) => (
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

  const data: ProCashData[] = [
    {
      provider: "MBME",
      onlineAccount: "13834073920003",
      beneficiaryAccountNumber: "AE380030010745968920001",
      beneficiaryName: "MBME PAY PAYMENT SERVICES PRO.LLC",
      beneficiaryBankName: "ABU DHABI COMMERCIAL BANK",
      remittanceCode: "UTL",
      paymentType: "IFT / EFD/ EFI",
      actions: "",
    },
    {
      provider: "Smiles",
      onlineAccount: "13834073920003",
      beneficiaryAccountNumber: "AE380030010745968920001",
      beneficiaryName: "MBME PAY PAYMENT SERVICES PRO.LLC",
      beneficiaryBankName: "ABU DHABI COMMERCIAL BANK",
      remittanceCode: "UTL",
      paymentType: "IFT / EFD/ EFI",
      actions: "",
    },
    {
      provider: "DEWA",
      onlineAccount: "13834073920003",
      beneficiaryAccountNumber: "AE380030010745968920001",
      beneficiaryName: "MBME PAY PAYMENT SERVICES PRO.LLC",
      beneficiaryBankName: "ABU DHABI COMMERCIAL BANK",
      remittanceCode: "UTL",
      paymentType: "IFT / EFD/ EFI",
      actions: "",
    },
    {
      provider: "RAFFLE",
      onlineAccount: "13834073920003",
      beneficiaryAccountNumber: "AE380030010745968920001",
      beneficiaryName: "MBME PAY PAYMENT SERVICES PRO.LLC",
      beneficiaryBankName: "ABU DHABI COMMERCIAL BANK",
      remittanceCode: "UTL",
      paymentType: "IFT / EFD/ EFI",
      actions: "",
    },
    {
      provider: "TRANSFER",
      onlineAccount: "13834073920003",
      beneficiaryAccountNumber: "AE380030010745968920001",
      beneficiaryName: "MBME PAY PAYMENT SERVICES PRO.LLC",
      beneficiaryBankName: "ABU DHABI COMMERCIAL BANK",
      remittanceCode: "UTL",
      paymentType: "IFT / EFD/ EFI",
      actions: "",
    },
  ];

  const items = [
    {
      key: '1',
      label: 'ProCash Updates',
      children: (
        <div>
          <Table 
            columns={columns} 
            dataSource={data} 
            rowKey={(record) => record.beneficiaryAccountNumber}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} items`,
            }}
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
      label: 'ProCash Config',
      children: (
        <div>
          <Form
            form={configForm}
            layout="vertical"
            onFinish={handleConfigUpdate}
            style={{ maxWidth: '100%' }}
          >
            <Form.Item
              label={
                <span>
                  Settlement File CID
                  <Tooltip title="LaaS App Customer Id">
                    <InfoCircleOutlined style={{ marginLeft: 8 }} />
                  </Tooltip>
                </span>
              }
              name="settlementFileCid"
              rules={[{ required: true, message: 'Please input settlement.file.cid!' }]}
              style={{ maxWidth: '400px' }}
            >
              <Input placeholder="Enter settlement.file.cid" />
            </Form.Item>

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
      <Title level={2}>ProCash Updates</Title>
      <Tabs defaultActiveKey="1" items={items} />
    </Card>
  );
};
