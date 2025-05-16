import { Modal } from "antd"

function CheckoutModal({ onOk, onCancel }) {
  return (
    <Modal title={"添加新地址"} onOk={onOk} onCancel={onCancel} width={800}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default CheckoutModal
