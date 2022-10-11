import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-gray-100 sticky top-0 z-10 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
      <div className="navbar-end px-5">
        <Link to='/home' className="btn btn-ghost normal-case text-3xl font-bold text-indigo-400">
          QUIZ QUIP
        </Link>
      </div>
    </div>
  );
};

export default Header;
