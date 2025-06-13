import { List, Row, Col } from "antd";

import AdminUserListItem from "./admin_user_list_item";

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
        <AdminUserListItem user={user} />
      )}
    />
  )
}

export { AdminUserListHeader, AdminUserList }
