import React, {useEffect, useState} from "react";
import { Modal,Button, Table} from "antd";
import axios from "axios";
import baseUrl from "../../backend/BaseUrl";

const DetailModal = ({visible,onCancel,id})=>{
    const columns = [
        {
          title: 'Ürün Adı',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Ürün Birim Fityatı',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Adet',
          dataIndex: 'count',
          key: 'count',
        },
      ];
    const [list, setList] = useState([]);
    const [refresh, setRefresh]=useState(false)
    useEffect(() => {
        let token = localStorage.getItem('token');
        token = token.replace(/"/g, '');
        axios.get(baseUrl+`order-detail/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if (visible){
                setList(res.data);
            }
        }).catch(e => console.log(e))
    },[refresh,visible])
    return(
    <>
        <Modal
            title="Sipariş Detay"
            centered
            cancelText="Kapat"
            okButtonProps={null}
            visible={visible}
            onCancel={onCancel}
            width={1000}
            footer={(
                <Button onClick={onCancel}>
                    Tamam
                </Button>
            )}
        >
            <br/>
            <hr/>
            <Table columns={columns} dataSource={list} />
        </Modal>
    </>
    )
}
export default DetailModal;