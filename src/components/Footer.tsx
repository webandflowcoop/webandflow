import { NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient text-center p-1">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center flex-wrap p-3">
          <ul className="list-inline mb-0">
            <li className="list-inline-item ms-3">
              <a
                href="mailto:hello@webandflow.coop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={30} />
              </a>
            </li>
          </ul>
          <p className="mb-0 lead responsive-text fs-sm-2 fs-md-5 fs-lg-4">
            &copy; {new Date().getFullYear()} Web & Flow. All rights reserved.
          </p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item ms-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li className="list-inline-item ms-3">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
