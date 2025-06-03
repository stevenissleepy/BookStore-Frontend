import { useState } from "react"
import { List, Row, Col, Input, DatePicker } from "antd"

import OrderItem from "./order_item"

function OrderList({ orders }) {
  return <List itemLayout="horizontal" dataSource={orders} renderItem={(order) => <OrderItem order={order} />} />
}

function OrderListHeader({ onSearch }) {
  const [dateRange, setDateRange] = useState(null)
  const [bookTitle, setBookTitle] = useState("")

  return (
    <Row justify={"start"} align="middle">
      {/* 调整位置 */}
      <Col flex={"20px"}></Col>

      <Col span={2}>
        <h3 className="order-header-title">All Orders</h3>
      </Col>

      <Col span={5} offset={9}>
        <DatePicker.RangePicker
          onChange={(dates) => {
            setDateRange(dates)
            onSearch(dates, bookTitle)
          }}
        />
      </Col>

      <Col span={6} offset={1}>
        <Input.Search
          placeholder="通过书名搜索"
          allowClear
          enterButton
          size="large"
          onSearch={(value) => {
            setBookTitle(value)
            onSearch(dateRange, value)
          }}
        />
      </Col>
    </Row>
  )
}

export { OrderList, OrderListHeader }
