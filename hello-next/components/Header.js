import Link from "next/link";

const linkStyle = {
    marginRight: 15,
    textDecoration: 'none',
    color: 'black'
};

const Header = () => (
    <>
      <Link href="/">
         <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </>
);

export default Header;