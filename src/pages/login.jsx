import { Link, useNavigate } from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { LoginFormPage, ProFormText } from "@ant-design/pro-components"
import { login } from "../services/user"
import { handleApiResponse } from "../utils/message"
import useMessage from "antd/es/message/useMessage"

function LoginPage() {
  const [messageApi, contextHolder] = useMessage()
  const navigate = useNavigate()

  async function handleSubmit(values) {
    const { username, password } = values
    const response = await login(username, password)
    const onOk = () => navigate(username === "admin" ? "/admin" : "/")
    handleApiResponse(response.code==200, messageApi, null, response.message, onOk)
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      {contextHolder}
      <LoginFormPage
        backgroundImageUrl="/login-bg.png"
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        logo={"/logo.png"}
        title="BookJar"
        subTitle="电子书城"
        style={{ height: "100vh" }}
        onFinish={handleSubmit}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: <UserOutlined className={"prefixIcon"} />,
          }}
          placeholder={"请输入用户名"}
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <Link to="/register">新账号？前往注册</Link>
          <a
            style={{
              float: "right",
            }}
            href="#/"
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}

export default LoginPage
