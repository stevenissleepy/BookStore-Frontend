import { Space, Badge, Avatar } from "antd"

import { EditButton } from "./buttons"

function ProfileAvatar({ user }) {
  return (
    <Space className="avatar-wrapper" direction="vertical" size={2}>

      {/* avatar */}
      <div style={{ textAlign: "center" }}>
        <Badge count={<EditButton />}>
          <Avatar src={user.avatar} style={{ width: "100px", height: "100px" }} />
        </Badge>
      </div>

      {/* nickname */}
      <span style={{ fontSize: 20 }}>{user.nickname}</span>
      
    </Space>
  )
}

export { ProfileAvatar }
