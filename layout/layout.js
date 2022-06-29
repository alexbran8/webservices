import Head from 'next/head'
import favicon from "../public/logo_small.svg"


const Layout = ({ children, pageTitle, description, ...props }) => {
    return (
        <div className="content">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <title>{pageTitle}</title>
            </Head>

            {children}
            
        </div>
    );
}

export default Layout;



{/* <link rel="shortcut icon" href={favicon} /> */ }
{/* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" /> */ }
{/* <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" /> */ }
{/* <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" /> */ }
{/* <link rel="shortcut icon" href={favicon} /> */ }
{/* <Footer /> */ }

{/* <Header /> */ }