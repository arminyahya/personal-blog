import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Main from "../components/Main";

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>Arshia Faraji | Front end developer</title>
      </Head>
      <section className="about-section">
        <p className="about">
          I'm a Front end web developer interested in new and upcoming
          technologies and trying to catch up to them.
        </p>
      </section>
      <Main home>
        <div className="blog-section-inner">
          <h2>Some of my little articles</h2>
          <ul>
            {allPostsData.map(({ id, date, title, catagory }) => (
              <div key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <li className="post">
                    <img src={`/images/${catagory}.svg`} height="38" />
                    <div>
                      <a>
                        <h3>{title}</h3>
                      </a>
                      <small>
                        <Date dateString={date} />
                      </small>
                    </div>
                  </li>
                </Link>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      </Main>
      <style jsx>{`
        .about-section {
          margin: 40px 0px;
        }
        .about {
          font-size: 24px;
          text-align: justify;
        }
        h2 {
          margin-bottom: 30px;
        }
        a {
          color: #4a4a4a;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0px 20px;
        }
        .post {
          margin: 20px 0px;
          cursor: pointer;
          transition: 0.2s;
          display: flex;
        }
        .post > img {
          position: relative;
          top: 12px;
          left: -17px;
        }
        .post:hover {
          opacity: 0.5;
        }
        small {
          font-size: 14px;
        }
        hr {
          width: 80%;
          opacity: 0.25;
        }
      `}</style>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
