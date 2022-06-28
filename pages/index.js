import Link from 'next/link'
import logo from "../public/logo.svg"

import Image from "next/image"

export default () => (
  <>
    <main>
      <div className="logo-container" title="test">
        <Image src={logo} title="webservices logo" alt="webservices logo" className="logo"></Image>
        <h5>Servicii Profesionale Web Development, Web Design, Gazduire</h5>
        <nav></nav>



      </div>

      <article></article>
      <footer>
        <p>dezvoltat de webservices.ro</p>
    </footer>
    </main>
  </>
)
