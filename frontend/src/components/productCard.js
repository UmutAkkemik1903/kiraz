import '../css/ProductCard.css';
import {
    LeftOutlined,
    RightOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
function ProductCard(props) {


    const sliderListLeft = () => {
        var slider = document.getElementById("c-slider-card");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderListRight = () => {
        var slider = document.getElementById("c-slider-card");
        slider.scrollLeft = slider.scrollLeft + 500;

    }
    return (
        <>
            <div className="" id="main-slider-container">
                <LeftOutlined size={40} className="slider-icon left" onClick={sliderListLeft} />
                <div id="c-slider-card">
                   
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                        <h4>aasdasdasd</h4>
                                        <h5>bbbbbbb</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div> 
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>
                                <div  className="c-slider-card-2">
                                    <img className="img-album" src="" alt=""/>
                                    <div className="c-controls">
                                    <ShoppingCartOutlined />
                                    </div>
                                    <div className='c-header-mi'>
                                    <h4>aasdasdasd</h4>
                                    <h5>aasdasdasd</h5>
                                    </div>
                                </div>


                     
                </div>
                <RightOutlined size={40} className="slider-icon right" onClick={sliderListRight} />
            </div>
        </>
    )

}
export default ProductCard;