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
import { CommentModal } from '../../../components/CommentModal';

const { Title, Text } = Typography;

interface ValueDisplayProps {
  label: string;
  value: string | number;
}

interface LimitSectionProps {
  title: string;
  attempts: number;
  lockingPeriod: string;
}

const ValueDisplay: React.FC<ValueDisplayProps> = ({ label, value }) => (
  <div style={{ marginBottom: 16 }}>
    <Text type="secondary" style={{ fontSize: 14 }}>{label}</Text>
    <div style={{ marginTop: 4 }}>
      <Text strong style={{ fontSize: 14 }}>{value}</Text>
    </div>
  </div>
);

const LimitSection: React.FC<LimitSectionProps> = ({ title, attempts, lockingPeriod }) => (
  <Col span={8}>
    <Title level={5} style={{ marginBottom: 16 }}>{title}</Title>
    <ValueDisplay label="No of Attempt" value={attempts} />
    <ValueDisplay label="Locking Period" value={lockingPeriod} />
  </Col>
);

const TransactionLimitsChecker: React.FC = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [isCommentModalOpen, setIsCommentModalOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState<'approve' | 'reject' | null>(null);

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

  const handleCommentSave = (comment: string) => {
    console.log(`${actionType} with comment:`, comment);
    setIsCommentModalOpen(false);
    navigate('/dashboard');
  };

  const limitData = {
    daily: { attempts: 5, lockingPeriod: "00:30:00" },
    weekly: { attempts: 5, lockingPeriod: "00:30:00" },
    monthly: { attempts: 5, lockingPeriod: "00:30:00" }
  };

  return (
    <div style={{ padding: token.paddingLG }}>
      <Title level={2} style={{ marginBottom: token.marginLG }}>
        Transaction Limits - CHECKER
      </Title>

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
          <LimitSection 
            title="Daily" 
            attempts={limitData.daily.attempts}
            lockingPeriod={limitData.daily.lockingPeriod}
          />
          <LimitSection 
            title="Weekly" 
            attempts={limitData.weekly.attempts}
            lockingPeriod={limitData.weekly.lockingPeriod}
          />
          <LimitSection 
            title="Monthly" 
            attempts={limitData.monthly.attempts}
            lockingPeriod={limitData.monthly.lockingPeriod}
          />
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
          <LimitSection 
            title="Daily" 
            attempts={limitData.daily.attempts}
            lockingPeriod={limitData.daily.lockingPeriod}
          />
          <LimitSection 
            title="Weekly" 
            attempts={limitData.weekly.attempts}
            lockingPeriod={limitData.weekly.lockingPeriod}
          />
          <LimitSection 
            title="Monthly" 
            attempts={limitData.monthly.attempts}
            lockingPeriod={limitData.monthly.lockingPeriod}
          />
        </Row>
      </Card>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: token.padding }}>
        <Button onClick={handleCancel}>
          CANCEL
        </Button>
        <Button 
          danger
          onClick={handleReject}
        >
          REJECT
        </Button>
        <Button 
          type="primary"
          onClick={handleApprove}
          style={{ backgroundColor: token.colorSuccess, borderColor: token.colorSuccess }}
        >
          APPROVE
        </Button>
      </div>

      {/* Comment Modal */}
      <CommentModal
        open={isCommentModalOpen}
        onCancel={() => setIsCommentModalOpen(false)}
        onSave={handleCommentSave}
        action={actionType}
      />
    </div>
  );
};

export { TransactionLimitsChecker };
