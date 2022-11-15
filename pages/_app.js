import "../styles/globals.css";
import { LangProvider } from "../context/lang";
import { GlobalProvider } from "../context/global";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </GlobalProvider>
  );
}

export default MyApp;
