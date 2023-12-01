import React from "react";
import CardBody from '../layout/card-body'
// import Image from "next/image"

import data from "../data/projects.json"

const Projects = () => {
  return (
    <div className="grid-card-container">
  {data && data.map((product, index) => {
    return <CardBody key={`card-${index}`} title = {product.title} description={product.description}/> 
  })
  }
  </div>
);
};

export default Projects;