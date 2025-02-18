import React, { useState } from 'react';
import { Badge, Tooltip } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './Notification.scss';

function Notification() {
    // Estado para armazenar a quantidade de notificações
    const [notificationCount, setNotificationCount] = useState(1);

    return (
        <div className="notification-container">
            <Tooltip title="Notificações">
                <Badge count={notificationCount} overflowCount={99}>
                    <BellOutlined style={{ fontSize: '24px', color: "white" }} />
                </Badge>
            </Tooltip>
        </div>
    );
}

export default Notification;
