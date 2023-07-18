import { NavLink } from "react-router-dom";


function Nav(){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Conference GO!</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="hide-new-location" aria-current="page" to="/locations/new">New location</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="hide-new-conference" aria-current="page" to="/conferences/new">New conference</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/presentations/new">New presentation</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    );
}

export default Nav;
