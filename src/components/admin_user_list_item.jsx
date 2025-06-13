import { useState } from "react"
import { List, Avatar, Switch } from "antd"

import { banUser, unbanUser } from "../services/user"

function AdminUserListItem({ user }) {
  const [status, setStatus] = useState(user.state)
  const [loading, setLoading] = useState(false)

  function handleSwitchChange(checked) {
    setLoading(true)
    if (checked) {
      unbanUser(user.username)
        .then(() => setStatus("normal"))
        .finally(() => setLoading(false))
    } else {
      banUser(user.username)
        .then(() => setStatus("banned"))
        .finally(() => setLoading(false))
    }
  }

  return (
    <List.Item
      className="admin-user-list-item"
      actions={[
        <Switch
          checkedChildren="启用"
          unCheckedChildren="封禁"
          loading={loading}
          checked={status === "normal"}
          onChange={handleSwitchChange}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={user.avatar} size={"large"} />}
        title={user.username}
        description={user.email}
      />
    </List.Item>
  )
}

export default AdminUserListItem
