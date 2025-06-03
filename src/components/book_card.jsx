import { useContext } from "react"
import { Card } from "antd"
import { Link } from "react-router-dom"

import { UserContext } from "../utils/context"

function BookCard({ book }) {
  const { user } = useContext(UserContext)
  const path = user.username === "admin" ? `/admin/book/${book.id}` : `/book/${book.id}`

  return (
    <Link to={path}>
      <Card
        hoverable
        cover={
          <div className="book-card-img-wrapper">
            <img className="book-card-img" alt="example" src={book.cover} />
          </div>
        }
      >
        <Card.Meta title={book.title} description={`${(book.price / 100).toFixed(2)} 元`} />
      </Card>
    </Link>
  )
}

export default BookCard
