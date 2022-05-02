import Link from 'next/link';
const Navbar = () => {
  return (
    <div id="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
};

export default Navbar;
