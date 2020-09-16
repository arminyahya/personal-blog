import "../styles/global.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
