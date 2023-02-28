import { ChakraProvider } from '@chakra-ui/react';
import { Footer, Navbar } from '@components/ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Head>
        <title>TripFolk</title>
        <meta name="title" content="TripFolk 2023" />
        <meta
          name="description"
          content="TripFolk adalah aplikasi tour guide online berbasis mobile yang hadir sebagai solusi untuk menyelesaikan permasalahan dengan mengubungkan turis dan warga lokal."
        />
      </Head>
      <div className="bg-background_global">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ChakraProvider>
  );
}
