import { useState } from "react"
import { Row, Col, List, Button } from "antd"
import { Link } from "react-router-dom"

import BookUploadModal from "./book_upload_modal"

import { deleteBook } from "../services/book"

function AdminBookListItem({ book }) {
  const [showModal, setShowModal] = useState(false)

  async function handleDelete() {
    await deleteBook(book.id)
    window.location.reload()
  }

  async function handleEdit() {
    setShowModal(true)
  }

  return (
    <>
      <BookUploadModal open={showModal} setOpen={setShowModal} book={book} />

      <List.Item key={book.id}>
        <Row className="admin-book-list-item" justify={"space-between"} align="middle">
          {/* 位置调整 */}
          <Col flex={"16px"}></Col>

          {/* 图书封面 */}
          <Col span={2}>
            <img className="admin-book-list-item-img" src={book.cover} alt={book.title} />
          </Col>

          {/* 图书信息 */}
          <Col span={4}>
            <h3 className="admin-book-list-item-title">{book.title}</h3>
            <p className="admin-book-list-item-author">{book.author}</p>
            <p className="admin-book-list-item-price">单价: ¥{(book.price / 100).toFixed(2)}</p>
          </Col>
          <Col span={2} offset={8}>
            <p className="admin-book-list-item-stock">库存: {book.stock}</p>
          </Col>

          <Col span={1} offset={2}>
            <Button onClick={handleEdit}>编辑</Button>
          </Col>

          <Col span={2}>
            <Button danger onClick={handleDelete}>
              删除
            </Button>
          </Col>
        </Row>
      </List.Item>
    </>
  )
}

export default AdminBookListItem
