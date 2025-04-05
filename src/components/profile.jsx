import { Space, Badge, Avatar, Button, Card } from "antd"
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

export { ProfileAvatar, ProfileInfo }
