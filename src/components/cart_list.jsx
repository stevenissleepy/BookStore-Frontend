import { List } from "antd"

import CartItem from "./cart_item"

function CardList({ cart }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={(book) => <CartItem book={book} />}
    />
  )
}

export default CardList
