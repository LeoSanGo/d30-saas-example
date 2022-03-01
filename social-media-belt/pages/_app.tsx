import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutApp from 'components/layout/LayoutApp';
import { useRouter } from 'next/router';
import LayoutPublic from 'components/layout/LayoutPublic';
import LayoutTenant from 'components/layout/LayoutTenant';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  let Layout = LayoutPublic;

  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutApp
  }
  if (pathname.indexOf('/[slug]') === 0) {
    Layout = LayoutTenant
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
