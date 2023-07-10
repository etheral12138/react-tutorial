import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const UserCard: React.FC = ({user}) => (

    <Card
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src="{user.avatar_url}"
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="${user.id}"
            description="This is the description"
        />
    </Card>
);

export default UserCard;