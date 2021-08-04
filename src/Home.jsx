import React, { useState, useEffect } from "react";
import "./home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://fakestoreapi.com/products");
      setProducts(request.data);
    }
    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <div className="home">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
          <div>
            <img src={image4} />
          </div>
          <div>
            <img src={image5} />
          </div>
          <div>
            <img src={image6} />
          </div>
        </Carousel>

        <div className="home__row">
          {products.slice(0, 4).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <img
          src="https:////links.papareact.com/dyz"
          style={{ width: "98%", padding: "12px", marginTop: "12px" }}
        />
        <div className="home__row firstSpan">
          {products.slice(4, 5).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="home__row secondSpan">
          {products.slice(5, 7).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="home__row thirdSpan">
          {products.slice(7, 10).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <div className="home__row ">
          {products.slice(10, products.length).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
