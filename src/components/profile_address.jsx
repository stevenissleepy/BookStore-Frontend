import { useState, useEffect } from "react"
import { List, Card, Space, Button, Empty, message } from "antd"

import SaveAdressModal from "./profile_modal"

import { getAddresses, addAddress, deleteAddress } from "../services/address"
import { handleApiResponse } from "../utils/message"

function ProfileAddress() {
  const [addresses, setAddresses] = useState([])
  const [showSaveAddressModal, setShowSaveAddressModal] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  /* Function to display user addresses */
  useEffect(() => {
    getAddresses().then(setAddresses)
  }, [])

  /* Function to handle the delete of an address */
  function handleDeleteAddress(id) {
    const onOk = () => getAddresses().then(setAddresses)
    deleteAddress(id).then((ok) => handleApiResponse(ok, messageApi, null, null, onOk))
  }

  /* Function to handle the addition of a new address */
  function handleAddAddress() {
    setShowSaveAddressModal(true)
  }

  function saveAddress(receiver, tel, address) {
    const onOk = () => getAddresses().then(setAddresses)
    addAddress(receiver, tel, address)
      .then((ok) => handleApiResponse(ok, messageApi, null, null, onOk))
      .finally(() => setShowSaveAddressModal(false))
  }

  function cancelSaveAddress() {
    setShowSaveAddressModal(false)
  }

  return (
    <>
      {/* save address modal */}
      <SaveAdressModal open={showSaveAddressModal} onCancel={cancelSaveAddress} onOk={saveAddress} />

      {/* address list */}
      <Card
        title="常用地址"
        extra={
          <Button type="primary" onClick={handleAddAddress}>
            添加
          </Button>
        }
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          {addresses.length === 0 && <Empty description="无" />}
          {addresses.length > 0 && (
            <List
              dataSource={addresses}
              renderItem={(address) => (
                <List.Item actions={[<a onClick={() => handleDeleteAddress(address.id)}>删除</a>]}>
                  <List.Item.Meta title={`${address.receiver} ${address.tel}`} description={address.address} />
                </List.Item>
              )}
            />
          )}
        </Space>
      </Card>
    </>
  )
}

export default ProfileAddress
