import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="navbar bg-white shadow-lg">
        <div className="flex-1 mr-5">
          <Link to="/home" className="btn btn-ghost normal-case text-indigo-400 text-3xl">
            Quiz Quip
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0  text-xl text-black font-semibold">
            <li>
              <NavLink
                className={`({ isActive }) => isActive ? 'activeClassName' : 'undefined' `}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
