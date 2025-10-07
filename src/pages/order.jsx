import { useState, useEffect, useContext, useCallback } from "react"
import { Card, Row, Col } from "antd"

import { UserLayout } from "../components/layout"
import { OrderList, OrderListHeader } from "../components/order_list"

import { UserContext } from "../utils/context"
import { searchUserOrders } from "../services/order"
import useOrderWebSocket from "../hooks/useOrderWebSocket"

function OrderPageContent () {
  const { user } = useContext(UserContext)

  const [orders, setOrders] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [bookTitle, setBookTitle] = useState("")
  const [dateRange, setDateRange] = useState(null)

  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchInitialOrders = useCallback(() => {
    setLoading(true)
    searchUserOrders(dateRange, bookTitle, 0, 8).then(({ orders, quantity }) => {
      setOrders(orders)
      setQuantity(quantity)
      setPage(1)
    }).finally(() => setLoading(false))
  }, [dateRange, bookTitle])

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
    fetchInitialOrders()
  }, [fetchInitialOrders])

  useOrderWebSocket(user.id, fetchInitialOrders)

  return (
    <Row gutter={[0, 20]}>
      {/* order title */}
      <Col span={24}>
        <Card variant="borderless">
          <OrderListHeader setBookTitle={setBookTitle} setDateRange={setDateRange} />
        </Card>
      </Col>

      {/* order list */}
      <Col span={24}>
        <Card variant="borderless">
          <OrderList orders={orders} quantity={quantity} loadMoreOrders={loadMoreOrders} />
        </Card>
      </Col>
    </Row>
  )
}

function OrderPage() {
  return (
    <UserLayout>
      <OrderPageContent />
    </UserLayout>
  )
}

export default OrderPage
