import { Layout } from "antd"

const { Footer } = Layout

function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      BookJar ©{new Date().getFullYear()} Created by Steven
    </Footer>
  )
}

export default MyFooter
