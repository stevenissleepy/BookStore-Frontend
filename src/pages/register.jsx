import { Link, useNavigate } from "react-router-dom"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { LoginFormPage, ProFormText } from "@ant-design/pro-components"
import { register } from "../services/user"
import { handleApiResponse } from "../utils/message"
import useMessage from "antd/es/message/useMessage"

function RegisterPage() {
  const [messageApi, contextHolder] = useMessage()
  const navigate = useNavigate()

  async function handleSubmit(values) {
    const { username, password } = values
    register(username, password).then((ok) => {
      function onOk() {
        navigate("/login")
      }
      handleApiResponse(ok, messageApi, "注册成功", "注册失败", onOk)
    })
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
        subTitle="注册新账号"
        style={{ height: "100vh" }}
        onFinish={handleSubmit}
        submitter={{
          searchConfig: {
            submitText: "注册",
          },
        }}
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
          placeholder={"请输入密码"}
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        />
        <ProFormText.Password
          name="confirmPassword"
          fieldProps={{
            size: "large",
            prefix: <LockOutlined className={"prefixIcon"} />,
          }}
          placeholder={"确认密码"}
          rules={[
            {
              required: true,
              message: "请确认密码！",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error("两次输入的密码不一致！"))
              },
            }),
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <Link to="/login">已有账号？前往登录</Link>
        </div>
      </LoginFormPage>
    </div>
  )
}

export default RegisterPage
