import React, { useContext } from "react";
import NavIcons from "./common/NavIcons";
import { ProfileInfo } from "./Profile";

function Header() {
  const pinfo = useContext(ProfileInfo);
  const title = pinfo.name;

  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0"> {title} </h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <NavIcons />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
