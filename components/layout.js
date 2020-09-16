import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, home }) => {
  return (
    <>
      <div className="container">
        <Navbar home={home} />
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
        <style jsx>{`
          .container {
            max-width: 880px;
            margin: 0 auto;
            padding: 0px 20px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
