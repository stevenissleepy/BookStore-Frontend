import { useContext } from "react"
import { Modal, List } from "antd"
import { Link } from "react-router-dom"

import { UserContext } from "../utils/context"

function OrderDetailModel({ open, orderItems, onCancel }) {
  const { user } = useContext(UserContext)
  const link = user.username == "admin" ? "/admin/book" : "/book"

  return (
    <Modal open={open} footer={null} width={500} onCancel={onCancel} centered>
      <List
        itemLayout="horizontal"
        dataSource={orderItems}
        renderItem={(orderItem) => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={orderItem.book.cover} style={{ width: "50px", height: "60px", objectFit: "contain" }} />}
              title={<Link to={`${link}/${orderItem.book.id}`}>{orderItem.book.title}</Link>}
              description= {`数量: ${orderItem.quantity}`}
            />
          </List.Item>
        )}
      />
    </Modal>
  )
}

export default OrderDetailModel
