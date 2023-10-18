import "@/styles/globals.css";
import BaseLayout from "./components/layout";

export default function App({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
