import { Col, Row } from "antd"

import { UserLayout } from "../components/layout"
import ProfileAvatar from "../components/profile_avatar"
import ProfileInfo from "../components/profile_info"
import ProfileAddress from "../components/profile_address"

import { UserContext } from "../utils/context"
import { useContext } from "react"

function Profile() {
  const { user, setUser } = useContext(UserContext)

  return (
    <Row justify={"center"} gutter={[0, 20]}>
      <Col span={16}>
        <ProfileAvatar user={user} />
      </Col>

      <Col span={16}>
        <ProfileInfo user={user} />
      </Col>

      <Col span={16}>
        <ProfileAddress user={user} />
      </Col>
    </Row>
  )
}

function ProfilePage() {
  return (
    <UserLayout>
      <Profile />
    </UserLayout>
  )
}

export default ProfilePage
