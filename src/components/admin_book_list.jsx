import { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { Row, Col, List, FloatButton, Input } from "antd"
import InfiniteScroll from "react-infinite-scroll-component"

import AdminBookListItem from "./admin_book_list_item"
import BookUploadModal from "./book_upload_modal"

function AdminBookListHeader({ setQuery }) {
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
          <Input.Search placeholder="搜索书籍" allowClear enterButton size="large" onSearch={setQuery} />
        </Col>
      </Row>
    </>
  )
}

function AdminBookList({ books, quantity, loadMoreBooks }) {
  return (
    <InfiniteScroll
      dataLength={books.length}
      next={loadMoreBooks}
      hasMore={books.length < quantity}
      loader={<h4>Loading...</h4>}
      style={{ width: "100%", overflow: "hidden" }}
    >
      <List itemLayout="horizontal" dataSource={books} renderItem={(book) => <AdminBookListItem book={book} />} />
    </InfiniteScroll>
  )
}

export { AdminBookListHeader, AdminBookList }
