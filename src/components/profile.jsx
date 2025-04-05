import { Space, Badge, Avatar, Button, Card, Empty, List } from "antd"
import { EditOutlined } from "@ant-design/icons"

function ProfileAvatar({ user }) {
  return (
    <Card variant="borderless">
      <Space className="avatar-wrapper" direction="vertical" size={2}>
        {/* avatar */}
        <div style={{ textAlign: "center" }}>
          <Badge
            count={
              <Button
                shape="circle"
                icon={<EditOutlined />}
                size="small"
                style={{
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              />
            }
            offset={[-5, 85]}
          >
            <Avatar src={user.avatar} style={{ width: "100px", height: "100px" }} />
          </Badge>
        </div>

        {/* nickname */}
        <span style={{ fontSize: 20 }}>{user.nickname}</span>
      </Space>
    </Card>
  )
}

function ProfileInfo({ user }) {
  return (
    <Card title="基础信息" variant="borderless">
      <p>用户名：{user.name}</p>
      <p>余额：{user.balance}</p>
    </Card>
  )
}

function ProfileAddress({ user }) {
  return (
    <Card title="常用地址" extra={<Button type="primary">添加</Button>}>
      <Space direction="vertical" style={{ width: "100%" }}>
        {user.addresses.length === 0 && <Empty description="无" />}
        {user.addresses.length > 0 && (
          <List
            dataSource={user.addresses}
            renderItem={(address) => (
              <List.Item actions={[<a onClick={() => handleDeleteAddress(address.id)}>删除</a>]}>
                <List.Item.Meta
                  title={`${address.receiver} ${address.tel}`}
                  description={address.address}
                />
              </List.Item>
            )}
          />
        )}
      </Space>
    </Card>
  )
}

export { ProfileAvatar, ProfileInfo, ProfileAddress}
