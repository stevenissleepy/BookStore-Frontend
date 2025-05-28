import { Button, Form, Input, Modal } from "antd"

function SaveAddressModal({ open, onOk, onCancel }) {
  const [form] = Form.useForm()

  function handleSubmit(values) {
    const { receiver, tel, address } = values
    onOk( receiver, tel, address )
  }

  return (
    <Modal title={"添加新地址"} open={open} onOk={onOk} onCancel={onCancel} footer={null} width={800}>
      <Form form={form} layout="vertical" onFinish={handleSubmit} preserve={false}>
        <Form.Item name="receiver" label="收货人" required>
          <Input />
        </Form.Item>

        <Form.Item name="tel" label="联系电话" required>
          <Input />
        </Form.Item>
        
        <Form.Item name="address" label="收货地址" required>
          <Input.TextArea rows={2} maxLength={817} />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default SaveAddressModal