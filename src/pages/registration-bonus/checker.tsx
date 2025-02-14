import React from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  Space,
  theme,
} from "antd";
import { useNavigate } from "react-router";
import { useTheme } from '@refinedev/antd';
import { CommentModal } from '../../components/CommentModal';

const { Title, Text } = Typography;

interface ValueDisplayProps {
  label: string;
  value: string | number;
}

const ValueDisplay: React.FC<ValueDisplayProps> = ({ label, value }) => (
  <div style={{ marginBottom: 24 }}>
    <Text type="secondary" style={{ fontSize: 14 }}>{label}</Text>
    <div style={{ marginTop: 4 }}>
      <Text strong style={{ fontSize: 14 }}>{value}</Text>
    </div>
  </div>
);

const RegistrationBonusChecker: React.FC = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [isCommentModalOpen, setIsCommentModalOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<'approve' | 'reject' | 'terminate-accept' | 'terminate-reject' | null>(null);

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const handleReject = () => {
    setActionType('reject');
    setIsCommentModalOpen(true);
  };

  const handleApprove = () => {
    setActionType('approve');
    setIsCommentModalOpen(true);
  };

  const handleTerminationAccept = () => {
    setActionType('terminate-accept');
    setIsCommentModalOpen(true);
  };

  const handleTerminationReject = () => {
    setActionType('terminate-reject');
    setIsCommentModalOpen(true);
  };

  const handleCommentSave = (comment: string) => {
    // Handle the comment and action type here
    console.log(`${actionType} with comment:`, comment);
    setIsCommentModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: token.marginLG }}>
        <Title level={2} style={{ margin: 0 }}>
          Registration Bonus Management - CHECKER
        </Title>
        <Space direction="vertical" size={token.marginXS} align="end">
          <Text strong>Termination Request</Text>
          <Space size={token.marginSM}>
            <Button
              type="primary"
              size="middle"
              onClick={handleTerminationAccept}
            >
              Accept
            </Button>
            <Button
              type="primary"
              danger
              size="middle"
              onClick={handleTerminationReject}
            >
              Reject
            </Button>
          </Space>
        </Space>
      </Row>

      {/* User Filled Values Section */}
      <Card
        title={<Title level={4} style={{ margin: 0 }}>Users Filled Values</Title>}
        style={{ 
          marginBottom: token.marginLG,
          borderRadius: token.borderRadius,
          boxShadow: token.boxShadowTertiary 
        }}
      >
        <Row gutter={[token.marginLG, token.marginMD]}>
          <Col span={12}>
            <ValueDisplay label="Biller ID" value="AADN2W32K11" />
          </Col>
          <Col span={12}>
            <ValueDisplay label="Sub-Biller ID" value="AADN2W32K11" />
          </Col>
        </Row>
        <Row gutter={[token.marginLG, token.marginMD]}>
          <Col span={12}>
            <ValueDisplay 
              label="Start Date" 
              value="2024-11-15 20:15:50" 
            />
          </Col>
          <Col span={12}>
            <ValueDisplay 
              label="End Date" 
              value="2025-11-24 20:15:50" 
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <ValueDisplay 
              label="Promotional Status" 
              value="Active"
            />
          </Col>
          <Col span={12}>
            <ValueDisplay 
              label="Bonus Value" 
              value="500" 
            />
          </Col>
        </Row>
      </Card>

      {/* Production Values Section */}
      <Card
        title={<Title level={4} style={{ margin: 0 }}>Production Filled Values</Title>}
        style={{ 
          marginBottom: token.marginLG,
          borderRadius: token.borderRadius,
          boxShadow: token.boxShadowTertiary 
        }}
      >
        <Row gutter={[token.marginLG, token.marginMD]}>
          <Col span={12}>
            <ValueDisplay label="Biller ID" value="AADN2W32K11" />
          </Col>
          <Col span={12}>
            <ValueDisplay label="Sub-Biller ID" value="AADN2W32K11" />
          </Col>
        </Row>
        <Row gutter={[token.marginLG, token.marginMD]}>
          <Col span={12}>
            <ValueDisplay 
              label="Start Date" 
              value="2025-11-25 20:15:50" 
            />
          </Col>
          <Col span={12}>
            <ValueDisplay 
              label="End Date" 
              value="2026-01-24 20:15:50" 
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <ValueDisplay 
              label="Promotional Status" 
              value="Inactive"
            />
          </Col>
          <Col span={12}>
            <ValueDisplay 
              label="Bonus Value" 
              value="500" 
            />
          </Col>
        </Row>
      </Card>

      {/* Action Buttons */}
      <Row justify="end">
        <Space size={token.marginSM}>
          <Button onClick={handleCancel}>
            CANCEL
          </Button>
          <Button 
            type="primary" 
            danger 
            onClick={handleReject}
          >
            REJECT
          </Button>
          <Button 
            type="primary"
            onClick={handleApprove}
            style={{ 
              backgroundColor: token.colorSuccess,
              borderColor: token.colorSuccess
            }}
          >
            APPROVE
          </Button>
        </Space>
      </Row>

      <CommentModal
        isOpen={isCommentModalOpen}
        onCancel={() => setIsCommentModalOpen(false)}
        onSave={handleCommentSave}
        title={`Add ${
          actionType === 'approve' ? 'Approval' : 
          actionType === 'reject' ? 'Rejection' :
          actionType === 'terminate-accept' ? 'Termination Approval' :
          'Termination Rejection'
        } Comment`}
      />
    </div>
  );
};

export { RegistrationBonusChecker };
