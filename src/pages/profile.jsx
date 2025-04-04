import { Card, Space } from "antd"

import { MyLayout } from "../components/layout"
import { ProfileAvatar } from "../components/profile"

import { users } from "../data"

function ProfilePage() {
  return (
    <MyLayout>
      <Card className="profile-container">
        <ProfileAvatar user={users[0]} />
      </Card>
    </MyLayout>
  )
}

export default ProfilePage
