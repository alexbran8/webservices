import Link from 'next/link'
import logo from "../public/logo.jpg"

import Image from "next/image"

const prefix = '/webservices/'


export default () => (
  <div>
    <Image src={logo} width={200} height={100}></Image>
     <Link href='/about' as={  '/about'}><a>About</a></Link></div>
  // process.env.BACKEND_URL +
)
