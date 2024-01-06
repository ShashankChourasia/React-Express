import { useState } from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import SearchBar from "./SearchBar";
// import { getAuthToken } from "../util/auth";

const Header = () => {
  const [toggle, setToggle]= useState(false);

  const token= useRouteLoaderData('root');

  const handleToggle= () => {
    setToggle(tog => !tog);
  }

  const toggleClasses= toggle ? "navbar-collapse collapse show" :"navbar-collapse collapse";

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          BLOGS
        </NavLink>
        <button
        onClick={handleToggle}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={toggleClasses}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                end
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs/new"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                New Blog
              </NavLink>
            </li>
            {!token && <li className="nav-item">
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login/Signup
              </NavLink>
            </li>}
            {token && <li>
              <Form action="/logout" method="post">
                <button className="btn btn-light">Logout</button>
              </Form>
            </li>}
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
