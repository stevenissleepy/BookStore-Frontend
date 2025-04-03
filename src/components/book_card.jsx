import { Card } from "antd"
import { Link } from "react-router-dom"
const { Meta } = Card

import books from "../data"

function BookCard({ book }) {
  return (
    <Link to={`/`}>
      <Card hoverable cover={<img alt="example" src={book.cover} />}>
        <Meta title={book.title} description={`${book.price} 元`} />
      </Card>
    </Link>
  )
}

export default BookCard