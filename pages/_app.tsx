import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layout/mainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
