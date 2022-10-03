import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../layout/mainLayout";
import { store } from "../stores/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
export default MyApp;
