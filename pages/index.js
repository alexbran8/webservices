import Link from 'next/link'
import logo from "../public/logo.jpg"



import Image from "next/image"

const prefix = '/webservices/'


export default () => (
  <div className="logo-container" title="test">
    <Image src={logo}  title="webservices logo" alt="webservices logo" className="logo"></Image>
    {/* <Link href='/about' as={'/about'}><a>About</a></Link> */}
  </div>
)
