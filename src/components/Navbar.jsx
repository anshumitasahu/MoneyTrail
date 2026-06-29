import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">

        <h1 className="navbar-title">
          <span className="Money">Money</span>
          <span className="Trail">Trail</span>
        </h1>
      
      </div>

      <div className="pages">

        <ul>

          <li>
            <NavLink to="/expenses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Expenses
            </NavLink>
          </li>

          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Dashboard
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}