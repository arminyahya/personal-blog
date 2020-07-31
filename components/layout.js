import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar home={home} />
      <main>{children}</main>
      <style jsx>{`
        .container {
          max-width: 890px;
          margin: 0 auto;
          padding: 0px 20px;
        }
      `}</style>
    </div>
  );
}
