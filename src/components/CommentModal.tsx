import React from 'react';
import { Modal, Input, Form } from 'antd';

const { TextArea } = Input;

interface CommentModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSave: (comment: string) => void;
  title?: string;
}

const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onCancel,
  onSave,
  title = 'Add Comment'
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values.description);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      onOk={handleSave}
      okText="SAVE"
      cancelText="CANCEL"
    >
      <Form form={form}>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a comment' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { CommentModal };
