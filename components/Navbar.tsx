import Link from 'next/link';
import Hamburger from './Hamburger';
import styles from './Navbar.module.css';
import { useState } from 'react';
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <nav id="navbar">
      <div id="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <Hamburger checked={checked} setChecked={setChecked} />
    </nav>
  );
};

export default Navbar;
