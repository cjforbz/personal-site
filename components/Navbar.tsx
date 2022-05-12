import Link from 'next/link';
const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
