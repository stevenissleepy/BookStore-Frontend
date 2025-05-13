import { Col, Row } from "antd"

import { UserLayout } from "../components/layout"
import ProfileAvatar from "../components/profile_avatar"
import ProfileInfo from "../components/profile_info"
import ProfileAddress from "../components/profile_address"

import { users } from "../data"

function ProfilePage() {
  return (
    <UserLayout>
      <Row justify={"center"} gutter={[0, 20]}>
        <Col span={16}>
          <ProfileAvatar user={users[0]} />
        </Col>

        <Col span={16}>
          <ProfileInfo user={users[0]} />
        </Col>

        <Col span={16}>
          <ProfileAddress user={users[0]} />
        </Col>
      </Row>
    </UserLayout>
  )
}

export default ProfilePage
