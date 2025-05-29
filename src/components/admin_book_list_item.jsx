import { Row, Col, List, Button } from "antd"

function AdminBookListItem(book) {
  return (
    <List.Item key={book.id}>
      <Row className="admin-book-list-item" justify={"space-between"} align="middle">
        {/* 位置调整 */}
        <Col flex={"16px"}></Col>

        {/* 图书封面 */}
        <Col span={2}>
          <img className="admin-book-list-item-img" src={book.cover} alt={book.title} />
        </Col>

        {/* 图书信息 */}
        <Col span={14}>
          <h3 className="admin-book-list-item-title">
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </h3>
          <p className="admin-book-list-item-author">{book.author}</p>
          <p className="admin-book-list-item-price">单价: ¥{(book.price / 100).toFixed(2)}</p>
        </Col>

        {/* 数量选择框 */}
        <Col span={3}>
          <Button> 编辑 </Button>
        </Col>

        {/* 总价 */}
        <Col span={3}>
          <Button danger> 删除 </Button>
        </Col>
      </Row>
    </List.Item>
  )
}

export default AdminBookListItem
