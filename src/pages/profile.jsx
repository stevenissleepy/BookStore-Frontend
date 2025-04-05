import { Col, Row } from "antd"

import { MyLayout } from "../components/layout"
import { ProfileAddress, ProfileAvatar, ProfileInfo } from "../components/profile"

import { users } from "../data"

function ProfilePage() {
  return (
    <MyLayout>
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
    </MyLayout>
  )
}

export default ProfilePage
