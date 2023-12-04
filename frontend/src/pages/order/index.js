import {NavLink} from "react-router-dom";
import {  Space, Table } from 'antd';
import {
EyeOutlined
} from '@ant-design/icons';
import {useEffect, useState} from "react";
import axios from "axios";
import baseUrl from "../../backend/BaseUrl";
import DetailModal from './DetailModal'
function CategoryIndex(props){
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const openModal = (id) => {
      setSelectedId(id);
      setOpen(true);
  };

  const closeModal = () => {
      setSelectedId(null);
      setOpen(false);
  };
    const columns = [
        {
            title: 'Sipariş Numarası',
            dataIndex: 'order_no',
        },
        {
          title: 'Ödenecek Tutar',
          dataIndex: 'total_price',
          render: (_, record) => (
            <div>
              {record.total_price} ₺
            </div>
        ),
      },
        {
            title: '',
            dataIndex: 'id',
            render: (_, record) => (
                <Space size="middle">
                   <a onClick={() => openModal(record.id)}>
                        <EyeOutlined style={{color:"darkblue"}} />
                    </a>
                </Space>
            ),
        },
    ];
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
      let token = localStorage.getItem('token');
      token = token.replace(/"/g, '');
        axios.get(baseUrl+'order',{
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }).then((res) => {
            setData(res.data)
        }).catch(e => console.log(e))
    },[refresh])
    return(
        <>
            <div style={{padding:'150px'}} className="category-index">
            <DetailModal visible={open} onCancel={closeModal} id={selectedId} />
                <Table
                    columns={columns}
                    pagination={{
                        position: 'bottomRight',
                    }}
                    dataSource={data}
                />
            </div>
        </>
    )
}
export default CategoryIndex;