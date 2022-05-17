import Link from 'next/link';
import Hamburger from './Hamburger';
const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
