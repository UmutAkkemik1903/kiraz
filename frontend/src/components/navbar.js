import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
  {
    label: (
      <NavLink to="login" >
        <UserOutlined /> Login
      </NavLink>
    ),
    key: 'alipay',
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu style={{backgroundColor: '#fff',width:'100%'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;