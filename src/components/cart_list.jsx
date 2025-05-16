import { List, Row, Col, Checkbox, Button } from "antd"

import CartItem from "./cart_item"

function CartList({ cart, handleQuantityChange, handleSelectChange }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={(cartItem) => (
        <CartItem
          book={cartItem.book}
          quantity={cartItem.quantity}
          handleQuantityChange={handleQuantityChange}
          handleSelectChange={handleSelectChange}
        />
      )}
    />
  )
}

function CartListHeader({ allSelected, handleSelectAllChange, handleCheckout }) {
  function handleCheckboxChange() {
    handleSelectAllChange()
  }
  return (
    <Row justify={"start"} align="middle">
      <Col flex={"30px"}>
        <Checkbox checked={allSelected} onChange={handleCheckboxChange} />
      </Col>

      <Col span={2}>
        <h3 className="cart-header-title">Select All</h3>
      </Col>

      <Col span={1} offset={19}>
        <Button type="primary" size="large" onClick={handleCheckout}>
          Checkout
        </Button>
      </Col>
    </Row>
  )
}

export { CartList, CartListHeader }
