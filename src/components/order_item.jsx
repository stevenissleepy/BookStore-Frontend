import { Row, Col, List, Checkbox} from "antd"

function OrderItem({ order }) {
  return (
    <List.Item>
      <Row className="order-item" justify={"start"} align="middle">
        {/* 下拉框 */}
        <Col flex={"30px"}>
          <Checkbox />
        </Col>

        {/* 订单信息 */}
        <Col span={5}>
          <h3 className="order-item-receiver">{order.receiver}</h3>
          <p className="order-item-tel">{order.tel}</p>
          <p className="order-item-address">{order.address}</p>
        </Col>

        {/* 总价 */}
        <Col span={2} offset={10}>
          <p className="order-item-price">￥{order.totalPrice}</p>
        </Col>
        
        {/* 日期 */}
        <Col span={2} offset={4}>
          <p className="order-item-date">{order.date}</p>
        </Col>
      </Row>
    </List.Item>
  )
}

export default OrderItem
