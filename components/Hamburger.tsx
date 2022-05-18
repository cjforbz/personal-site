import Link from 'next/link';
const Hamburger = () => {
  return (
    <div>
      <input type="checkbox" id="hamburger-input" className="burger-shower" />
      <label htmlFor="hamburger-input">
        <div id="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
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
      <div className="overlay">
        {/* <input type="checkbox" className="burger-shower" /> */}
      </div>
    </div>
  );
};

export default Hamburger;
