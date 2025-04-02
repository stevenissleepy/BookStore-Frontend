import { Layout } from "antd"

const { Footer } = Layout

function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Des ign ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  )
}

export default MyFooter
