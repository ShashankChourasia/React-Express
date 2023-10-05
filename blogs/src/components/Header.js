import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          BLOGS
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
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
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
