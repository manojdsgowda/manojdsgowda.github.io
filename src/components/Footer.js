import React, { useContext } from "react";

import { ProfileInfo } from "./Profile";
import NavIcons from "./common/NavIcons";

function Footer(props) {
  const pinfo = useContext(ProfileInfo);

  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">{pinfo.name}</div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <NavIcons />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
