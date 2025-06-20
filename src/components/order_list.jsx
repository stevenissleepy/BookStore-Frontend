import { List, Row, Col, Input, DatePicker } from "antd"
import InfiniteScroll from "react-infinite-scroll-component"

import OrderItem from "./order_item"

function OrderList({ orders, quantity, loadMoreOrders }) {
  return (
    <InfiniteScroll
      dataLength={orders.length}
      next={loadMoreOrders}
      hasMore={orders.length < quantity}
      loader={<h4>Loading...</h4>}
    >
      <List itemLayout="horizontal" dataSource={orders} renderItem={(order) => <OrderItem order={order} />} />
    </InfiniteScroll>
  )
}

function OrderListHeader({ setBookTitle, setDateRange }) {
  return (
    <Row justify={"start"} align="middle">
      {/* 调整位置 */}
      <Col flex={"20px"}></Col>

      <Col span={2}>
        <h3 className="order-header-title">All Orders</h3>
      </Col>

      <Col span={5} offset={10}>
        <DatePicker.RangePicker size="large" variant="borderless" onChange={setDateRange} />
      </Col>

      <Col flex={"30px"}></Col>

      <Col span={6}>
        <Input.Search placeholder="通过书名搜索" allowClear enterButton size="large" onSearch={setBookTitle} />
      </Col>
    </Row>
  )
}

export { OrderList, OrderListHeader }
