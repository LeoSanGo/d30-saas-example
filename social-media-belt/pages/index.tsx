import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Seo from 'components/SEO';

const Home: NextPage = () => {
  return (
    <div className={''}>
      <Seo title='Social Media Belt' description='Social media Belt' />

      <ul>
        <li><Link href='/app' ><a>App</a></Link></li>
        <li><Link href='/devpleno' ><a>Tenant devpleno</a></Link></li>
      </ul>
    </div>
  );
};

export default Home;
