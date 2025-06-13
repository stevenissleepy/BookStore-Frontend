import { Row, Col } from "antd"

import { AdminLayout } from "../components/layout"
import AdminBookStats from "../components/admin_book_stats"

function AdminStatsPage() {
  return (
    <AdminLayout>
      <Row justify="center" gutter={[0, 20]}>
        <Col span={24}>
          <AdminBookStats />
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminStatsPage
