import './Navbar.css';
import LayoutSwitcher from './LayoutSwitcher';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li>
            <a href="#hero" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#cv" className="navbar-link">
              CV
            </a>
          </li>

          <li>
            <a href="#commits" className="navbar-link">
              GitHub
            </a>
          </li>
          
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-utilities">
          <LayoutSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
