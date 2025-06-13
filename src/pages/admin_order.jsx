import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { AdminLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { searchAllOrders } from "../services/order"

function AdminOrderPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    searchAllOrders(null, null).then(setOrders)
  }, [])

  async function handleSearch(dateRange, bookTitle) {
    searchAllOrders(dateRange, bookTitle).then(setOrders)
  }

  return (
    <AdminLayout>
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
    </AdminLayout>
  )
}

export default AdminOrderPage
