import "./index.scss"
import "../layout/card-body.scss"
import "../styles/navbar.scss"
// import "./Footer.scss"

import Layout from "../layout/layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
  return <Layout pageTitle={"webservices.ro"} description={"webservices.ro official website"}>
    <Component {...pageProps} />
    </Layout>
}
export default MyApp