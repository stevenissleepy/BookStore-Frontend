import { Card } from "antd"
import { Link } from "react-router-dom"

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <Card hoverable cover={<img alt="example" src={book.cover} />}>
        <Card.Meta title={book.title} description={`${book.price} 元`} />
      </Card>
    </Link>
  )
}

export default BookCard
