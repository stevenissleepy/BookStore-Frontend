import { useState, useEffect } from "react"
import { Card, Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { searchUserOrders } from "../services/order"

function OrderPage() {
  const [orders, setOrders] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [bookTitle, setBookTitle] = useState("")
  const [dateRange, setDateRange] = useState(null)

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadMoreOrders() {
    if (loading) return
    setLoading(true)
    const response = await searchUserOrders(dateRange, bookTitle, page, 8)
    const newOrders = response.orders || []
    setOrders((orders) => [...orders, ...newOrders])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    searchUserOrders(null, "", 0, 8).then(({ orders, quantity }) => {
      setOrders(orders)
      setQuantity(quantity)
    })
  }, [])

  useEffect(() => {
    searchUserOrders(dateRange, bookTitle, 0, 8).then(({ orders, quantity }) => {
      setOrders(orders)
      setQuantity(quantity)
    })
  }, [bookTitle, dateRange])

  return (
    <UserLayout>
      <Row gutter={[0, 20]}>
        {/* cart title */}
        <Col span={24}>
          <Card variant="borderless">
            <OrderListHeader setBookTitle={setBookTitle} setDateRange={setDateRange} />
          </Card>
        </Col>

        {/* cart list */}
        <Col span={24}>
          <Card variant="borderless">
            <OrderList orders={orders} quantity={quantity} loadMoreOrders={loadMoreOrders} />
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

export default OrderPage
