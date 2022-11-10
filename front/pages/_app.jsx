import "../styles/globals.css";
import Header from "../components/header";
import RecentChange from "../components/recentChange";
import useEthers from "../hooks/useEthers";

function MyApp({ Component, pageProps }) {
  const [ web3, account, error ] = useEthers()

  if(!account || error) return 'metamask로 로그인 해주세요'

  return (
    <>
      <Header />
      <RecentChange />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
