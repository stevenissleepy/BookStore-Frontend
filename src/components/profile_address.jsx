import { useState, useEffect } from "react"
import { List, Card, Space, Button, Empty } from "antd"

import { getAddresses } from "../services/user"

function ProfileAddress() {
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    getAddresses().then(setAddresses)
  }, [])

  return (
    <Card title="常用地址" extra={<Button type="primary">添加</Button>}>
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
  )
}

export default ProfileAddress
