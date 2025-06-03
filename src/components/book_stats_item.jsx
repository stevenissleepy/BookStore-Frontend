import { List, Row, Col } from "antd"
import { Link } from "react-router-dom"

function BookStatsItem({ item }) {
  const book = item.book
  const quantity = item.quantity

  return (
    <List.Item key={book.id}>
      <Row className="book-stats-item" justify={"space-between"} align="middle">
        {/* 位置调整 */}
        <Col flex={"16px"}></Col>

        {/* 图书封面 */}
        <Col span={2}>
          <img className="book-stats-item-img" src={book.cover} alt={book.title} />
        </Col>

        {/* 图书信息 */}
        <Col span={4}>
          <h3 className="book-stats-item-title">
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </h3>
          <p className="book-stats-item-author">{book.author}</p>
          <p className="book-stats-item-price">单价: ¥{(book.price / 100).toFixed(2)}</p>
        </Col>

        {/* 购买数量 */}
        <Col span={2} offset={15}>
          <p className="book-stats-item-quantity">{quantity}本</p>
        </Col>

      </Row>
    </List.Item>
  )
}

export default BookStatsItem
