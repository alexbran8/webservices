import Link from 'next/link'
import logo from "../public/logo.jpg"



import Image from "next/image"

const prefix = '/webservices/'


export default () => (
  <div className="logo">
    <Image src={logo} className="logo"></Image>
    <Link href='/about' as={'/about'}><a>About</a></Link>
  </div>
  // process.env.BACKEND_URL +
)
