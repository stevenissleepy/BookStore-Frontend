import { useState, useEffect } from "react"
import { List, Card, Space, Button, Empty, message } from "antd"

import SaveAdressModal from "./profile_modal"

import { getAddresses, addAddress } from "../services/address"
import { handleApiResponse } from "../utils/message"

function ProfileAddress() {
  const [addresses, setAddresses] = useState([])
  const [showSaveAddressModal, setShowSaveAddressModal] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  /* Function to display user addresses */
  useEffect(() => {
    getAddresses().then(setAddresses)
  }, [])

  function handleDeleteAddress(id) {
    setAddresses((prevAddresses) => prevAddresses.filter((address) => address.id !== id))
  }

  /* Function to handle the addition of a new address */
  function handleAddAddress() {
    setShowSaveAddressModal(true)
  }

  function saveAddress(receiver, phone, address) {
    addAddress(receiver, phone, address).then((response) => {
      handleApiResponse(
        response,
        messageApi,
        () => getAddresses().then(setAddresses),
      )
    }
  )
  }

  function cancelSaveAddress() {
    setShowSaveAddressModal(false)
  }

  return (
    <>
      {/* save address modal */}
      {showSaveAddressModal && (
        <SaveAdressModal visible={showSaveAddressModal} onCancel={cancelSaveAddress} onOk={saveAddress} />
      )}

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
                  <List.Item.Meta title={`${address.receiver} ${address.phone}`} description={address.address} />
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
