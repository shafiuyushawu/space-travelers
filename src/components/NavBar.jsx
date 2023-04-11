import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

const NavBar = () => (
  <header>
    <nav>
      <a href="/">
        <img className="logo" src={logo} alt="" />
        <h1 style={{ fontWeight: '300' }}>Space traveler&apos; Hub</h1>
      </a>
      <ul>
        <Link className="nav-items" to="/rockets">Rockets</Link>
        <Link className="nav-items" to="/missions">Missions</Link>
        <span>|</span>
        <Link className="nav-items" to="/profile">My Profile</Link>
      </ul>
    </nav>
  </header>
);

export default NavBar;
