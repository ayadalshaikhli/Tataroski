import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import * as ga from "../lib/google-analytics/";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
     
       gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script>
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </>
  );
}

export default MyApp;
