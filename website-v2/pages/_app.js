import Layout from '../components/Layout';
import '../styles/globals.scss';
import '../styles/Util.scss';
import '../styles/AboutMe.scss';
import '../styles/Experience.scss';
import '../styles/Layout.scss';
import '../styles/Greeting.scss';

function MyApp({ Component, pageProps }) {
  return <Layout>
      <Component {...pageProps} />
    </Layout>
}

export default MyApp
