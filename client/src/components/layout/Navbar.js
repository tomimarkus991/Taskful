import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import TaskContext from "../../context/task/TaskContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const taskContext = useContext(TaskContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearTasks } = taskContext;

  const onLogout = () => {
    logout();
    clearTasks();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/api">Api</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/api">Api</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Taskful",
  icon: "fas fa-tasks",
};
export default Navbar;
