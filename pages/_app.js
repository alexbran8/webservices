import "./index.scss"
import "../layout/card-body.scss"
import "../styles/navbar.scss"
// import "./Footer.scss"

import Layout from "../layout/layout";

const MyApp = ({ Component, pageProps }) => {
  return <Layout pageTitle={"webservices.ro"} description={"webservices.ro official website"}>
    <Component {...pageProps} />
    </Layout>
}
export default MyApp