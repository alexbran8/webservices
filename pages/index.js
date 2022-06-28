import Link from 'next/link'
import logo from "../public/logo.jpg"

import Image from "next/image"
export default () => (
  <div>
    <Image src={logo} height={100}></Image>
     <Link href='/about' as={  '/about'}><a>About</a></Link></div>
  // process.env.BACKEND_URL +
)
