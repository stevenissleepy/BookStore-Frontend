import { List, Avatar } from 'antd';

function AdminUserListItem({ user }) {
  return (
    <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
        <List.Item.Meta
          avatar={<Avatar src={user.avatar} />}
          title={user.name}
          description={user.email}
        />
    </List.Item>
  )
}

export default AdminUserListItem;