import Link from 'next/link'
import logo from "../public/logo.svg"

import Image from "next/image"

export default () => (
  <div className="logo-container" title="test">
    <Image src={logo}  title="webservices logo" alt="webservices logo" className="logo"></Image>
    <h5>Servicii Profesionale Web Development, Web Design, Gazduire</h5>
    {/* <Link href='/about' as={'/about'}><a>About</a></Link> */}
  </div>
)
