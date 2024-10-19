import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contact Book</NavLink>
    </nav>
  );
};

export default Navigation;
