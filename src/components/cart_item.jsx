import { Row, Col, List, Checkbox, InputNumber } from "antd"
import { Link } from "react-router-dom"

function CartItem({ book, quantity, handleQuantityChange, handleSelectChange }) {
  const totalPrice = (book.price * quantity).toFixed(2) // 计算总价

  function handleInputNumberChange(value) {
    handleQuantityChange(book.id, value)
  }

  function handleCheckboxChange() {
    handleSelectChange(book.id)
  }

  return (
    <List.Item key={book.id}>
      <Row className="cart-item" justify={"space-between"} align="middle">
        {/* 选择框 */}
        <Col flex={"16px"}>
          <Checkbox checked={book.selected} onChange={handleCheckboxChange} />
        </Col>

        {/* 图书封面 */}
        <Col span={2}>
          <img className="cart-item-img" src={book.cover} alt={book.title} />
        </Col>

        {/* 图书信息 */}
        <Col span={14}>
          <h3 className="cart-item-title">
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </h3>
          <p className="cart-item-author">{book.author}</p>
          <p className="cart-item-price">单价: ¥{book.price}</p>
        </Col>

        {/* 数量选择框 */}
        <Col span={4}>
          <InputNumber min={0} max={99} value={quantity} size="large" onChange={handleInputNumberChange} />
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
