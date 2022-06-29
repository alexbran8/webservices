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
      <div className="dev-env">Lucrăm la dezvoltarea acestei pagini.
        <p>Între timp ne puteți contacta sau urmări pe pagina noastră de <a href="https://www.facebook.com/webservices.ro" target="blank">facebook</a>.
        </p>
      </div>
      <article></article>
      <footer>
        <a href="https://www.facebook.com/webservices.ro" target="blank">dezvoltat de webservices.ro</a>
      </footer>
    </main>
  </>
)
