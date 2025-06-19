import { Row, Col } from "antd"

import { AdminLayout } from "../components/layout"
import AdminBookStats from "../components/admin_book_stats"
import AdminUserStats from "../components/admin_user_stats"

function AdminStatsPage() {
  return (
    <AdminLayout>
      <Row justify="center" gutter={[0, 20]}>
        <Col span={24}>
          <AdminBookStats />
        </Col>
        <Col span={24}>
          <AdminUserStats />
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminStatsPage
