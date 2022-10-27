import "../styles/globals.css";
import Header from "../components/header";
import RecentChange from "../components/recentChange";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <RecentChange />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
