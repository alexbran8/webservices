import "./index.css"
import { AppProps } from 'next/app';
import Head from 'next/head'
import Layout from "../layout/layout";


const MyApp = ({ Component, pageProps }) => {
  return <Layout pageTitle={"webservices.ro"} description={"webservices.ro official website"}>
    <Component {...pageProps} />
    </Layout>
}
export default MyApp