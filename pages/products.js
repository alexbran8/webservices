import React from "react";
import CardBody from '../layout/card-body'
import Image from "next/image"

import productsData from "../data/products.json"


const Products = () => {
  return (
    <div className="center">
        <div className="grid-card-container">
      {productsData && productsData.map((product, index) => {
        return <CardBody key={`card-${index}`} title = {product.title} description={product.description}/> 
      })
      }
      </div>
    </div>
  );
};

export default Products;