import { Card, Col, Row } from "antd"

import { AdminLayout } from "../components/layout"
import { AdminUserListHeader, AdminUserList } from "../components/admin_user_list"

function AdminUserManagePage() {
  return (
    <AdminLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminUserListHeader />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminUserList />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminUserManagePage
