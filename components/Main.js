import Link from "next/link";

const Main = ({ children, home }) => {
  return (
    <section className="blog-section">
      <div className="blog-section-inner">
        {children}
        {!home && (
          <div>
            <Link href="/">
              <a>← Back</a>
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .blog-section {
          background-color: white;
          border-radius: 10px;
          color: #3b3b3b;
          -webkit-box-shadow: 0px 0px 45px -25px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 45px -25px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 45px -25px rgba(0, 0, 0, 0.75);
          font-family: "Recursive", sans-serif;
          margin-bottom: 100px;
        }
        .blog-section-inner {
          padding: 30px 40px;
        }
      `}</style>
    </section>
  );
};

export default Main;
