import { Row, Col, List, Checkbox, InputNumber } from "antd"

import { useState } from "react"

function CartItem({ book }) {
  const [quantity, setQuantity] = useState(1) // 数量状态
  const totalPrice = (book.price * quantity).toFixed(2) // 计算总价

  return (
    <List.Item>
      <Row className="cart-item" justify={"space-between"} align="middle">
        {/* 选择框 */}
        <Col flex={"16px"}>
          <Checkbox />
        </Col>

        {/* 图书封面 */}
        <Col span={2}>
          <img className="cart-item-img" src={book.cover} alt={book.title} />
        </Col>

        {/* 图书信息 */}
        <Col span={14}>
          <h3 className="cart-item-title">{book.title}</h3>
          <p className="cart-item-author">{book.author}</p>
          <p className="cart-item-price">单价: ¥{book.price}</p>
        </Col>

        {/* 数量选择框 */}
        <Col span={4}>
          <InputNumber min={1} max={99} value={quantity} size="large" onChange={(value) => setQuantity(value)} />
        </Col>

        {/* 总价 */}
        <Col span={2}>
          <p className="cart-item-total">¥{totalPrice}</p>
        </Col>
      </Row>
    </List.Item>
  )
}

export default CartItem
