import { Row, Col, List, FloatButton, Input } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useState } from "react"

import AdminBookListItem from "./admin_book_list_item"
import BookUploadModal from "./book_upload_modal"

function AdminBookListHeader({ onSearch }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <BookUploadModal open={showModal} setOpen={setShowModal} />
      <FloatButton type="primary" icon={<PlusOutlined />} onClick={() => setShowModal(true)} />

      <Row justify={"start"} align="middle">
        <Col flex={"20px"}></Col>

        <Col span={2}>
          <h3 className="admin-book-list-header-title">书籍管理</h3>
        </Col>

        <Col span={7} offset={14}>
          <Input.Search placeholder="搜索书籍" allowClear enterButton size="large" onSearch={onSearch} />
        </Col>
      </Row>
    </>
  )
}

function AdminBookList({ books }) {
  return <List itemLayout="horizontal" dataSource={books} renderItem={(book) => <AdminBookListItem book={book} />} />
}

export { AdminBookListHeader, AdminBookList }
