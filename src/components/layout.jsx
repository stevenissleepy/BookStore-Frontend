import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Layout, message } from "antd"

import MyHeader from "./header"
import MyFooter from "./footer"
import { UserContext } from "../utils/context"
import { getUser } from "../services/user"

const { Content } = Layout

function BaseLayout({ children, contextHolder = null, user = null }) {
  return (
    <Layout className="my-layout">
      {contextHolder}
      <MyHeader user={user} />
      <Content className="content-container">{children}</Content>
      <MyFooter />
    </Layout>
  )
}

function UserLayout({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  /* 检查 Login, 且保证只检查一次 */
  let isChecking = false
  async function checkLogin() {
    if (isChecking) return
    isChecking = true

    const me = await getUser()
    if (!me) {
      messageApi.error("请先登录", 1).then(() => navigate("/login"))
    } else {
      setUser(me)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <BaseLayout contextHolder={contextHolder} user={user}>
      <UserContext.Provider value={{ user, setUser }}>
        {user && children}
      </UserContext.Provider>
    </BaseLayout>
  )
}

export { BaseLayout, UserLayout }
