import { Row, Col, Image, Space, Button, Descriptions } from "antd"

function AdminBookInfo({ book, handleAddToCart, handleBuyNow }) {
  return (
    <Row justify={"space-around"}>
      <Col span={9} style={{ display: "flex", alignItems: "center" }}>
        <Image src={book.cover} />
      </Col>

      <Col span={14}>
        <h2 className="book-info-title">{book.title}</h2>
        <div className="book-info-price"> ￥{(book.price / 100).toFixed(2)}</div>
        <div className="book-info-description"> {book.description}</div>

        <Descriptions column={1} layout="horizontal" size="small">
          <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
          <Descriptions.Item label="Category">{book.category}</Descriptions.Item>
          <Descriptions.Item label="ISBN">{book.isbn}</Descriptions.Item>
          <Descriptions.Item label="Language">{book.language}</Descriptions.Item>
        </Descriptions>

      </Col>
    </Row>
  )
}

export default AdminBookInfo