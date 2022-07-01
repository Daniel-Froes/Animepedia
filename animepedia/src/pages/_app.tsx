import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/bundle.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


