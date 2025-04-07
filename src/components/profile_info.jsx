import { Card } from "antd"

function ProfileInfo({ user }) {
  return (
    <Card title="基础信息" variant="borderless">
      <p>用户名：{user.name}</p>
      <p>余额：{user.balance}</p>
    </Card>
  )
}

export default ProfileInfo