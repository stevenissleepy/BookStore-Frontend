import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { getOrders } from "../services/order"

function OrderPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders().then(setOrders)
  }, [])

  return (
    <UserLayout>
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
            <OrderList orders={orders} />
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

export default OrderPage
