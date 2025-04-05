import { MyLayout } from "../components/layout"
import CardList from "../components/cart_list"

import { users } from "../data"
import { Card } from "antd"

function CartPage() {
  return (
    <MyLayout>
      <Card variant="borderless">
        <CardList cart={users[0].cart} />
      </Card>
    </MyLayout>
  )
}

export default CartPage
