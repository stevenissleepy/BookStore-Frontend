import { Card, Row, Col } from "antd"

import { MyLayout } from "../components/layout"
import BookInfo from "../components/book_info"

import { books } from "../data"

function BookPage() {
  return (
    <MyLayout>
      <Row gutter={[0, 20]} justify={"center"}>
        <Col span={18}>
          <Card variant="borderless">
            <BookInfo book={books[0]} />
          </Card>
        </Col>
      </Row>
    </MyLayout>
  )
}

export default BookPage
