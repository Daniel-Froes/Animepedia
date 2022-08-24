import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/bundle.css"
import SSRProvider from 'react-bootstrap/SSRProvider';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
      
    </>
  );
}

export default MyApp;


