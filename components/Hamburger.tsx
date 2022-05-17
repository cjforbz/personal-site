import Link from 'next/link';
const Hamburger = () => {
  return (
    <div>
      <input type="checkbox" id="hamburger-input" className="burger-shower" />
      <label id="hamburger-menu" htmlFor="hamburger-input">
        <nav id="sidebar-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </label>
      <div className="overlay"></div>
    </div>
  );
};

export default Hamburger;
