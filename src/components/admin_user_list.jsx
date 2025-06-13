import { List, Row, Col } from "antd";

function AdminUserListHeader() {
  return (
    <Row justify={"start"} align="middle">
      <Col flex={"20px"}></Col>

      <Col span={2}>
        <h3 className="admin-user-list-header-title">用户管理</h3>
      </Col>
    </Row>
  )
}

function AdminUserList({ users }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta title={user.name} description={`Email: ${user.email}`} />
        </List.Item>
      )}
    />
  )
}

export { AdminUserListHeader, AdminUserList }
