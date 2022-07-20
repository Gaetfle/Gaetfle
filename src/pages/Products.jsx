import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../styles/all-foods.css';
import '../styles/pagination.css';
import flowerImg from '../assets/images/flower.png';
import cakeImg from '../assets/images/cake.png';
import comboImg from '../assets/images/combo.png';
import InfiniteScroll from 'react-infinite-scroll-component';

const Products = () => {
  Cookies.set('user', 'admin')
  console.log(Cookies.get('user'));
  
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [showedProducts, setShowedProducts] = useState(allProducts.slice(0, 8));
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(()=>{
    if(allProducts.length > 8) {
      setPageNumber(2)
      setHasMore(true)
      setShowedProducts(allProducts.slice(0, 8));
    }
    else {
      setShowedProducts(allProducts);
      setHasMore(false)
      
    }
  },[allProducts])
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
      setPageNumber(2)
      setHasMore(true)
      setShowedProducts(allProducts.slice(0, 8));
    }

    if (category === 'FLOWER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Flower'
      );

      setAllProducts(filteredProducts);
    }

    if (category === 'CAKE') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Cake'
      );

      setAllProducts(filteredProducts);
    }

    if (category === 'Combo') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Combo'
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const getMoreData = async () => {
    setShowedProducts((item) => [
      ...item,
      ...allProducts.slice(pageNumber * 4, pageNumber * 4 + 4),
    ]);
    setPageNumber(pageNumber + 1);
    if (pageNumber >= 4) setHasMore(false);
    console.log(showedProducts);
    console.log(pageNumber);
  };

  const handleHighPrice = () => {
    const highPrice = allProducts.sort((a, b) => b.price - a.price).slice(0, 8);
    setShowedProducts(highPrice);
  }

  const handleLowPrice = () => {
    const lowPrice = allProducts.sort((a, b) => a.price - b.price).slice(0, 8);
    setShowedProducts(lowPrice);
  }

  return (
    <Helmet title="Products">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col
              lg="12"
              style={{
                marginTop: '-70px',
                marginBottom: '45px',
              }}
            >
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  } `}
                  onClick={() => setCategory('ALL')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'FLOWER' ? 'foodBtnActive' : ''
                  } `}
                  onClick={() => setCategory('FLOWER')}
                >
                  <img src={flowerImg} alt="" />
                  Flower
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'CAKE' ? 'foodBtnActive' : ''
                  } `}
                  onClick={() => setCategory('CAKE')}
                >
                  <img src={cakeImg} alt="" />
                  Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'COMBO' ? 'foodBtnActive' : ''
                  } `}
                  onClick={() => setCategory('COMBO')}
                >
                  <img src={comboImg} alt="" />
                  Combo
                </button>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6" xs="12">
              <h4 style={{fontWeight: 600}}>{category}</h4>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <span>Sort by: </span>
                <select
                  className="w-10"
                  style={{
                    backgroundColor: '#FCF9F3',
                  }}
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (e.target.value === 'high-price') {
                      handleHighPrice();
                    } 
                    else if (e.target.value === 'low-price') {
                      handleLowPrice();
                    }
                  }}
                >
                  <option>Default</option>
                  <option value="high-price" onClick={handleHighPrice}>High Price</option>
                  <option value="low-price" onClick={handleLowPrice}>Low Price</option>
                </select>
              </div>
            </Col>
    
            {
              <InfiniteScroll
                dataLength={showedProducts.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h3></h3>}
                endMessage={<h3></h3>}
              >
                <Container>
                  <Row>
                {showedProducts.map((item) => (
                  <Col
                    lg="3"
                    md="4"
                    sm="6"
                    xs="6"
                    key={item.id}
                    className="mb-4"
                  >
                    <ProductCard item={item} />
                  </Col>
                ))}
                </Row>
                </Container>
              </InfiniteScroll>
            }
          
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Products;
