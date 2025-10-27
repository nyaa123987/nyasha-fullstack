import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return <Component {...pageProps} />;
}
