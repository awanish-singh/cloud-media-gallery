import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All Media</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/Share">Sharing</NavLink>
        </li>
        <li>
          <NavLink to="/Albums">Albums</NavLink>
        </li>
        <li>
          <NavLink to="/Events">Events</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
