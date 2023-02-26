import logo from "../public/logo.svg"
import Image from "next/image"

export const Header = () => {
return (
<div className="logo-container" title="test">
<Image src={logo} title="webservices logo" alt="webservices logo" className="logo" priority={true}></Image>
<h5>Servicii Profesionale Web Development, Web Design, Găzduire</h5>
</div>
)}