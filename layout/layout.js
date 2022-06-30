import Head from 'next/head'
import favicon from "../public/logo_small.svg"
import Footer from './footer';

const Layout = ({ children, pageTitle, description, ...props }) => {
    return (
        <div className="content">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <title>{pageTitle}</title>
            </Head>
            {/* <Footer /> */}

            {children}
            
        </div>
    );
}

export default Layout;