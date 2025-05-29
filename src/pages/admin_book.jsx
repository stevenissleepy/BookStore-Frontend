import { Row, Col, Card } from "antd"

import { UserLayout } from "../components/layout"
import { AdminBookList, AdminBookListHeader } from "../components/admin_book_list"

function AdminBookPage(){
  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <AdminBookListHeader />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

export default AdminBookPage