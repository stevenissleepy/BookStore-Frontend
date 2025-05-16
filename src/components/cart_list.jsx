import { List, Row, Col, Checkbox, Button } from "antd"

import { useState } from "react"

import CartItem from "./cart_item"
import CheckoutModal from "./checkout_modal"

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

function CartListHeader({ allSelected, handleSelectAllChange }) {
  const [showModal, setShowModal] = useState(false)

  function handleCheckboxChange() {
    handleSelectAllChange()
  }

  return (
    <>
      <CheckoutModal open={showModal} onOk={() => setShowModal(false)} onCancel={() => setShowModal(false)} />

      <Row justify={"start"} align="middle">
        <Col flex={"30px"}>
          <Checkbox checked={allSelected} onChange={handleCheckboxChange} />
        </Col>

        <Col span={2}>
          <h3 className="cart-header-title">Select All</h3>
        </Col>

        <Col span={1} offset={19}>
          <Button type="primary" size="large" onClick={() => setShowModal(true)}>
            Checkout
          </Button>
        </Col>
      </Row>
    </>
  )
}

export { CartList, CartListHeader }
