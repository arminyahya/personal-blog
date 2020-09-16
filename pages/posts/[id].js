import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Main from "../../components/Main";
import ReactMarkdown from "react-markdown/with-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const Post = ({ content, frontmatter }) => {
  const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
  };
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <Main>
          <small className="tags">#{frontmatter.catagory}</small>
          <h1>{frontmatter.title}</h1>
          <small className="date">
            <Date dateString={frontmatter.date} />
          </small>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </Main>
      </article>
      <style jsx>
        {`
          article {
            color: inherit;
          }
          h1 {
            font-size: 32px;
          }
          .tags {
            color: #fff;
            padding: 0px 5px;
            border-radius: 5px;
            background: linear-gradient(
              56deg,
              rgba(143, 183, 202, 1) 0%,
              rgba(202, 185, 143, 1) 100%
            );
          }
          .date {
            font-size: 14px;
            margin: 0;
          }
        `}
      </style>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", id + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = {
    ...data,
  };

  return {
    props: {
      content: `${content}`,
      frontmatter,
    },
  };
}
