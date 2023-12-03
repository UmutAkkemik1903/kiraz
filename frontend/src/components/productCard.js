import React, { useEffect, useState } from 'react';
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Image, Form, Select, InputNumber, Button } from 'antd';
import axios from 'axios';
import baseUrl from '../backend/BaseUrl';
import '../css/ProductCard.css';

function ProductCard(props) {
  const sliderListLeft = () => {
    var slider = document.getElementById('c-slider-card');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderListRight = () => {
    var slider = document.getElementById('c-slider-card');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const { Option } = Select;
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchProducts = async (category_id, sort_key) => {
    try {
      const res = await axios.get(
        baseUrl + `product?category_id=${category_id}&sort=${sort_key}`
      );
      setProduct(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts('', '');
  }, []);

  useEffect(() => {
    if (searchText) {
      fetchProducts(searchText, '');
    }
  }, [searchText]);

  useEffect(() => {
    axios
      .get(baseUrl + 'category', {
        headers: {
          Authorization: 'Bearer',
        },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const filterOptions = (inputValue, option) => {
    if (option && option.children) {
      return option.children.toLowerCase().includes(inputValue.toLowerCase());
    }
    return false;
  };

  const handleClearSelect = () => {
    setSearchText(''); 
    fetchProducts('', ''); 
  };

  return (
    <>
      <Form
        style={{ display: 'flex' }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          style={{ width: '200px', marginLeft: '100px', paddingTop: '25px' }}
          className="song_form_create"
          name="category_name"
        >
          <Select
            placeholder="Kategori seçin"
            showSearch
            filterOption={filterOptions}
            onChange={(value) => {
              setSearchText(value);
            }}
            value={searchText}
          >
            {category.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          className="song_form_create"
          style={{ width: '200px', paddingTop: '25px' }}
          name="sort"
        >
          <Select
            placeholder="Sırala"
            showSearch
            filterOption={filterOptions}
            onChange={(value) => {
              fetchProducts(searchText, value);
            }}
          >
            <Option key={1} value={"asc"}>
              Artan
            </Option>
            <Option key={2} value={"desc"}>
              Azalan
            </Option>
          </Select>
        </Form.Item>
        <Button style={{ marginLeft: '10px',marginTop:'25px' }} onClick={handleClearSelect}>
          Temizle
        </Button>
      </Form>
      <div className="" id="main-slider-container">
        <LeftOutlined size={40} className="slider-icon left" onClick={sliderListLeft} />
        <div id="c-slider-card">
          {product.map((productList) => (
            <div key={productList.id} className="c-slider-card-2">
              <Image
                height={200}
                className="img-album"
                src="img/80847f1e.png"
              />
              <div style={{ marginRight: '400px' }} className="c-controls">
                <InputNumber style={{ width: '40px' }} className="input-number" />
                <ShoppingCartOutlined />
              </div>
              <div className="c-header-mi">
                <div style={{ display: 'block' }}>
                  <h3>{productList.product_name}</h3>
                  <h4>{productList.description}</h4>
                  <h5>{productList.price} ₺</h5>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
        <RightOutlined size={40} className="slider-icon right" onClick={sliderListRight} />
      </div>
    </>
  );
}

export default ProductCard;
