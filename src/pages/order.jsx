import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { searchUserOrders } from "../services/order"

function OrderPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    searchUserOrders().then(setOrders)
  }, [])

  async function handleSearch(dateRange, bookTitle) {
    searchUserOrders(dateRange, bookTitle).then(setOrders)
  }

  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <OrderListHeader onSearch={handleSearch} />
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
