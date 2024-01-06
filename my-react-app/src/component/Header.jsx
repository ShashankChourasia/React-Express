import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid navbar navbar-expand-lg bg-light">
      <NavLink to="/" className="navbar-brand mx-3">
        SERVICES
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active mx-3" : "nav-link mx-3"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/new-service"
        className={({ isActive }) =>
          isActive ? "nav-link active mx-3" : "nav-link mx-3"
        }
      >
        New Service
      </NavLink>
    </div>
  );
};

export default Header;
