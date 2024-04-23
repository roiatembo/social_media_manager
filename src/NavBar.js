import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"}><h2>Social Media Manager</h2></Link>
      <h2>Add A Company</h2>
    </div>
  );
}
