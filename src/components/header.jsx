import { Layout, Row, Col, Menu } from "antd"
import { Link } from "react-router-dom"

const { Header } = Layout

function MyHeader() {
  const navItems = [
    { label: "HOME", value: "/" },
    { label: "CART", value: "/cart" },
    { label: "DASHBOARD", value: "/dashboard" },
    { label: "ORDER", value: "/order" },
  ]

  return (
    <Header className="header">
      <Row className="navbar" justify="space-between">
        {/* Logo */}
        <Col flex="120px">
          <Link to="/">
            <img className="logo" src="/logo-dark.svg" alt="Logo" />
          </Link>
        </Col>

        {/* Menu */}
        <Col className="menu-container"  flex="auto">
          <Menu className="menu" mode="horizontal" items={navItems} />
        </Col>

        {/* Login buttons */}
        <Col flex="120px" >
          
        </Col>

      </Row>
    </Header>
  )
}

export default MyHeader
