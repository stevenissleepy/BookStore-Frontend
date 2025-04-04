import { MyLayout } from "../components/layout"
import BookList from "../components/book_list"

import { books } from "../data"

function HomePage() {
  return (
    <MyLayout>
      <BookList books={books} />
    </MyLayout>
  )
}

export default HomePage
