import { Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import BookStats from "../components/book_status"

function StatsPage() {
  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <BookStats />
        </Col>
      </Row>
    </UserLayout>
  )
}

export default StatsPage
