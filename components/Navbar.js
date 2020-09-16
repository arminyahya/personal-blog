import Link from "../lib/activeLink";

const Navbar = ({ home }) => {
  return (
    <nav className={home && "border-bottom"}>
      <Link href="/">
        <h1>arshia faraji</h1>
      </Link>
      <ul>
        <li>
          <Link activeClassName="active" href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Arsh1a">
            github
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/Arsh1a">
            contact
          </a>
        </li>
      </ul>
      <style jsx>{`
        nav {
          padding: 50px 0px 20px 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: "Josefin Sans", sans-serif;
        }
        .border-bottom {
          border-bottom: 1px solid #c9c9c9;
        }
        h1 {
          font-size: 41px;
          cursor: pointer;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
        }
        li {
          font-weight: 500;
          font-size: 20px;
        }
        li:nth-child(2) {
          margin: 0 50px;
        }
        .active {
          opacity: 1;
        }
        a {
          color: inherit;
          opacity: 0.6;
        }
        a:hover {
          opacity: 1;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
