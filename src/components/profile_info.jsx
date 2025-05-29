import { Card } from "antd"

function ProfileInfo({ user }) {
  return (
    <Card title="基础信息" variant="borderless">
      <p>用户名：{user.username}</p>
      <p>余额：{(user.balance / 100).toFixed(2)} 元</p>
    </Card>
  )
}

export default ProfileInfo