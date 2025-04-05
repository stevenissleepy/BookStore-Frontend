import { Card, Col, Row } from "antd"

import { MyLayout } from "../components/layout"
import { ProfileAvatar } from "../components/profile"

import { users } from "../data"

function ProfilePage() {
  return (
    <MyLayout>
      <Row justify={"center"}>
        <Col span={16}>
            <ProfileAvatar user={users[0]} />
        </Col>
      </Row>
    </MyLayout>
  )
}

export default ProfilePage
