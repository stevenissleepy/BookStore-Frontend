import { Modal, List } from "antd"
import { Link } from "react-router-dom"

function OrderDetailModel({ open, books, onCancel }) {
  return (
    <Modal open={open} footer={null} width={500} onCancel={onCancel} centered>
      <List
        itemLayout="horizontal"
        dataSource={books}
        renderItem={(book) => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={book.cover} style={{ width: "50px", height: "60px", objectFit: "contain" }} />}
              title={<Link to={`/book/${book.id}`}>{book.title}</Link>}
              description={"数量：" + book.quantity}
            />
          </List.Item>
        )}
      />
    </Modal>
  )
}

export default OrderDetailModel
