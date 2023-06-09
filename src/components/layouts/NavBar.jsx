import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/planet.png';

const NavBar = () => {
  const [active, setActive] = useState('Rockets');
  return (
    <header className="mx-3 mb-5 border-b-2">
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
          <h1>Space traveler&apos; Hub</h1>
        </Link>
        <ul>
          <NavLink
            className={active === 'Rockets' ? 'active' : ''}
            to="/"
            onClick={() => setActive('Rockets')}
          >
            Rockets
          </NavLink>
          <NavLink
            className={active === 'Missions' ? 'active' : ''}
            to="/missions"
            onClick={() => setActive('Missions')}
          >
            Missions
          </NavLink>
          <span>|</span>
          <NavLink
            className={active === 'Profile' ? 'active' : ''}
            to="/profile"
            onClick={() => setActive('Profile')}
          >
            My Profile
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
