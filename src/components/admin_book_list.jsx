import { Row, Col, Button } from "antd"

import AdminBookListItem from "./admin_book_list_item"

function AdminBookListHeader() {
  return (
    <Row justify={"start"} align="middle">
      <Col flex={"20px"}></Col>

      <Col span={2}>
        <h3 className="admin-book-list-header-title">书籍管理</h3>
      </Col>

      <Col span={1} offset={19}>
        <Button type="primary" size="large" onClick={() => setShowModal(true)}>
          添加书籍
        </Button>
      </Col>
    </Row>
  )
}

function AdminBookList(books) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={books}
      renderItem={(book) => (
        <AdminBookListItem
          book={book}
        />
      )}
    />
  )
}

export { AdminBookListHeader, AdminBookList }
