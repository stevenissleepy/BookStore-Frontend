import { Modal, Space, Empty, Radio, List, message } from "antd"
import { useState, useEffect } from "react"
import { getAddresses } from "../services/address"

function CheckoutModal({ open, onOk, onCancel }) {
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    getAddresses().then(setAddresses)
  }, [])

  function handleOk() {
    if (selectedAddress) {
      onOk(selectedAddress)
    } else {
      messageApi.error("请选择一个地址")
    }
  }

  return (
    <Modal title={"选择地址"} open={open} onOk={handleOk} onCancel={onCancel} width={800}>
      {contextHolder}
      <Space direction="vertical" style={{ width: "100%" }}>
        {addresses.length === 0 && <Empty description="无" />}
        {addresses.length > 0 && (
          <Radio.Group onChange={(e) => setSelectedAddress(e.target.value)} value={selectedAddress}>
            <List
              itemLayout="horizontal"
              dataSource={addresses}
              renderItem={(addr) => <RadioAddress address={addr} />}
            />
          </Radio.Group>
        )}
      </Space>
    </Modal>
  )
}

function RadioAddress({ address }) {
  return (
    <List.Item>
      <Radio key={address.id} value={address}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 4 }}>
            {address.receiver}
            <span style={{ color: "#888", fontSize: 14, marginLeft: 12 }}>{address.phone}</span>
          </div>
          <div style={{ color: "#666", fontSize: 14 }}>{address.address}</div>
        </div>
      </Radio>
    </List.Item>
  )
}

export default CheckoutModal
