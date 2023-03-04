import Head from 'next/head'
import favicon from "../public/logo_small.svg"
// import Footer from './footer';
import Navbar from "../components/Navbvar"
import { Header} from "../components/Header";
import {UnderConstruction} from '../components/UnderConstruction'

const Layout = ({ children, pageTitle, description, ...props }) => {
    return (
        <div className="content">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.svg" />
                <title>{pageTitle}</title>
            </Head>

                <Header />
                <UnderConstruction />
                <Navbar />    

            {/* <Footer /> */}

            {children}
        </div>
    );
}

export default Layout;