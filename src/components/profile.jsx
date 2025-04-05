import { Space, Badge, Avatar, Button } from "antd"
import { EditOutlined } from "@ant-design/icons"

function ProfileAvatar({ user }) {
  return (
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
  )
}

export { ProfileAvatar }
