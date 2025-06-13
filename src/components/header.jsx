import { Layout, Row, Col, Menu, Dropdown, Button } from "antd"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { UserOutlined, FormOutlined } from "@ant-design/icons"
import { AccountBookOutlined, LogoutOutlined } from "@ant-design/icons"

import { logout } from "../services/user"

function BaseHeader({ navItems, dropMenuItems }) {
  const navigate = useNavigate()
  const parts = useLocation().pathname.split("/")
  const selectedKey = "/" + parts[parts.length - 1]
  const menuSpan = navItems.length === 5 ? 7 : 4

  function handleMenuClick(e) {
    const item = navItems.find((item) => item.key === e.key)
    navigate(item.location)
  }

  function handleDropMenuClick({ key }) {
    if (key === "logout") {
      logout().then(() => navigate("/login"))
    }
  }

  return (
    <Layout.Header className="header">
      <Row className="navbar" justify="space-between">
        {/* Logo */}
        <Col flex="120px">
          <Link to="/">
            <img src="/logo-dark.svg" alt="Logo" style={{ width: "100%", height: "100%" }} />
          </Link>
        </Col>

        {/* Menu */}
        <Col span={menuSpan}>
          <Menu
            mode="horizontal"
            style={{ borderBottom: "none", minWidth: "340px" }}
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            items={navItems}
            onClick={handleMenuClick}
          />
        </Col>

        {/* Login buttons */}
        <Col span={2} style={{ textAlign: "right" }}>
          <Dropdown menu={{ items: dropMenuItems, onClick: handleDropMenuClick }}>
            <Button shape="circle" icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  )
}

function UserHeader({ user = null }) {
  const userNavItems = [
    { label: "HOME", key: "/", location: "/" },
    { label: "PROFILE", key: "/profile", location: "/profile" },
    { label: "CART", key: "/cart", location: "/cart" },
    { label: "ORDER", key: "/order", location: "/order" },
    { label: "STATS", key: "/stats", location: "/stats" },
  ]

  const userDropMenuItems = [
    {
      key: "nickname",
      label: user ? user.username : "未登录",
      icon: <UserOutlined />,
    },
    {
      key: "password",
      label: "修改密码",
      icon: <FormOutlined />,
      disabled: !user,
    },
    {
      key: "balance",
      label: user ? `余额 ${(user.balance / 100).toFixed(2)} 元` : "余额未知",
      icon: <AccountBookOutlined />,
      disabled: !user,
    },
    {
      key: "logout",
      label: "登出",
      icon: <LogoutOutlined />,
      danger: true,
      disabled: !user,
    },
  ]

  return <BaseHeader navItems={userNavItems} dropMenuItems={userDropMenuItems} />
}

function AdminHeader({ user = null }) {
  const adminNavItems = [
    { label: "HOME", key: "/admin", location: "/admin" },
    { label: "BOOKS", key: "/book-manage", location: "/admin/book-manage" },
    { label: "USERS", key: "/user-manage", location: "/admin/user-manage" },
  ]

  const adminDropMenuItems = [
    {
      key: "nickname",
      label: user ? user.username : "未登录",
      icon: <UserOutlined />,
    },
    {
      key: "password",
      label: "修改密码",
      icon: <FormOutlined />,
      disabled: !user,
    },
    {
      key: "logout",
      label: "登出",
      icon: <LogoutOutlined />,
      danger: true,
      disabled: !user,
    },
  ]
  return <BaseHeader navItems={adminNavItems} dropMenuItems={adminDropMenuItems} />
}

export { UserHeader, AdminHeader }
