import { Card, Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { users } from "../data"

function OrderPage() {
  return (
    <MyLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <OrderListHeader />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <OrderList orders={users[0].orders} />
          </Card>
        </Col>
      </Row>
    </MyLayout>
  )
}

export default OrderPage
