import React, { useEffect, useState } from 'react';
import { Button, Steps, theme,Space, Table,Divider, List, notification,message,Popconfirm  } from 'antd';
import axios from 'axios';
import {
  DeleteOutlined
  } from '@ant-design/icons';
import baseUrl from '../../backend/BaseUrl';
import { useNavigate  } from 'react-router-dom';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const history = useNavigate ();
  const createSuccess = (type) => {
      api[type]({
          message: 'Sepet',
          description:
              'Ürün eklendi',
      });
  };
  const createWarning = (type) => {
      api[type]({
          message: 'Sepet',
          description:
              'Ürün eklenemedi',
      });
  }; 
const [cart, setCart]=useState([]);
const getTotalAmount = (data) => {
  let totalAmount = 0;

  data.forEach(item => {
    const itemTotal = item.count * item.price;
    totalAmount += itemTotal;
  });

  return totalAmount;
};
const result = getTotalAmount(cart);
const data = [
  'Ürünlerin Fiyatı :' + result + '₺',
];
const columns = [
  {
    title: 'Ürün Adı',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Adet',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Fiyat',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
      <Popconfirm
          title="Sepet"
          description="Silmek istediğinize emin misiniz?"
          onConfirm={() => deleteCart(record.id)}
          okText="Evet"
          cancelText="Hayır"
      >
          <a><DeleteOutlined  style={{color:"red"}} /></a>
      </Popconfirm>

  </Space>
    ),
  },
];
const steps = [
  {
    title: 'Önizleme',
    content: (<Table columns={columns} dataSource={cart} />),
  },
  {
    title: 'Tamamlama',
    content: [
      <>
     
    <Divider orientation="left"></Divider>
    <List
      size="small"
      footer={<div>Toplam Fiyat : {result} ₺</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
      </>
    ],
  },
];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let token = localStorage.getItem('token');
    token = token.replace(/"/g, '');
    axios
      .get(baseUrl + 'cart', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        setCart(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  const next = () => {
    if(result){
      setCurrent(current + 1);
    } else {

    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const done = () => {
    let token = localStorage.getItem('token');
    token = token.replace(/"/g, '');
    const orderData = {
        result
      };

    axios.post(baseUrl + 'order', orderData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
      history('/');
      createSuccess('success');
    })
    .catch((err) => {
      createWarning('error');
    });
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    innerWidth:'75px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const [refresh, setRefresh] = useState(false);
  const deleteCart = (item) => {
    if (item) {
        let token = localStorage.getItem('token');
        token = token.replace(/"/g, '');

        axios.post(baseUrl + `cart-delete/${item}`, null, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.data.message) {
                message.success('Silme işlemi başarılı.');
                setRefresh([...cart], true);
            } else {
                message.warning('Silme işlemi başarısız.');
            }
        })
        .catch((e) => {
            console.log(e);
            message.error('Silme işlemi sırasında bir hata oluştu.');
        });
    }
};
  return (
    <>
    {contextHolder}
    <div style={{padding:'150px'}}>
    <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            İleri
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => done()}>
            Tamamla
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Geri
          </Button>
        )}
      </div>
    </div>
      
    </>
  );
};
export default App;