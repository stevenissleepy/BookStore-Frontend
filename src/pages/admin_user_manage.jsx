import { useState, useEffect, use } from "react"
import { Card, Col, Row } from "antd"

import { AdminLayout } from "../components/layout"
import { AdminUserListHeader, AdminUserList } from "../components/admin_user_list"

import { getUsers } from "../services/user"

function AdminUserManagePage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

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
            <AdminUserList users={users} />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  )
}

export default AdminUserManagePage
