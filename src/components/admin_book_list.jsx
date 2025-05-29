import { Row, Col, Button } from "antd"

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

function AdminBookList() {
  
}

export { AdminBookListHeader, AdminBookList }
