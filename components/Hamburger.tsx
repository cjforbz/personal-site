import Link from 'next/link';
import { useEffect, useState } from 'react';
const Hamburger = ({ checked, setChecked }) => {
  const closeMenu = (e) => {
    if (checked) setChecked(false);
    console.log('clicked');
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        id="hamburger-input"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="hamburger-input">
        <div id="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <nav id="sidebar-menu">
        <ul>
          <li onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div
        className="overlay"
        onClick={(e) => {
          e.preventDefault;
          if (checked) setChecked(false);
        }}
      ></div>
    </div>
  );
};

export default Hamburger;
