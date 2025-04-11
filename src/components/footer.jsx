import { Layout } from "antd"

const { Footer } = Layout

function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      BookJar ©{new Date().getFullYear()} Created by{" "}
      <a className="creator-name" href="https://github.com/stevenissleepy">
        Steven
      </a>
    </Footer>
  )
}

export default MyFooter
