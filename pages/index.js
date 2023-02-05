import Link from 'next/link'
import logo from "../public/logo.svg"
import UnderConstruction from './underConstruction'
import CardBody from '../layout/card-body'
import Image from "next/image"

import productsData from "../data/products.json"

export default () => (
  
  <>
    <main>
      <div className="logo-container" title="test">
        <Image src={logo} title="webservices logo" alt="webservices logo" className="logo"></Image>
        <h5>Servicii Profesionale Web Development, Web Design, Găzduire</h5>
  
        <nav></nav>
      </div>
      <UnderConstruction />
      <>
      {productsData && productsData.map((product, index) => {
        return <CardBody key={`card-${index}`} title = {product.title} description={product.description}/> 
      })
      }
      </>
      <article></article>
      <footer>
        <a href="https://www.facebook.com/webservices.ro" target="blank">dezvoltat de webservices.ro</a>
      </footer>
    </main>
  </>
)
