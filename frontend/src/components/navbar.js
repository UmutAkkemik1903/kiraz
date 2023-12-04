import React, { useState } from 'react';
import { UserOutlined,ShoppingCartOutlined,LogoutOutlined,HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../backend/BaseUrl';
const token = localStorage.getItem('token'); 
const userName = token ? 'Hesabım' : null;
const LogoutHandle = () => {
  axios.get(baseUrl+'logout').then((res) => {
    localStorage.removeItem("token");
    window.location.reload()
  })
}
const items = [
  {
    label: (
      <NavLink to="/" >
        <HomeOutlined />
      </NavLink>
    ),
    key: 'home',
  },
  {
    label: (
      <div>  
      {userName ? (
        <NavLink to="siparislerim" >
        <UserOutlined /> {userName}
      </NavLink>
      ) : (
        <NavLink to="login" >
        <UserOutlined /> Login
      </NavLink>
      )}
    </div>
    ),
    key: 'login',
  },
   
  {
    label: (
      <NavLink to="sepetim" >
        <ShoppingCartOutlined /> Sepetim
      </NavLink>
    ),
    key: 'order',
  },
  {
    key: '12',
    icon: <LogoutOutlined onClick={LogoutHandle} />,
    label: <a onClick={LogoutHandle}>Çıkış Yap</a> ,
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