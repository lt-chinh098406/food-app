import '@/app/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';

const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
  loading: () => <div className="h-16 md:h-24"></div>,
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false,
  loading: () => <div className="h-16 md:h-28"></div>,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Food App - Order Fresh Food Delivery</title>
        <meta
          name="description"
          content="Order delicious food through the Bella Onojie food delivery app. Download now for iOS and Android to enjoy fresh, quick food delivery service."
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div className="h-16 md:h-24"></div>}>
            <Component {...pageProps} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
