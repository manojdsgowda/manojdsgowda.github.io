import React, { useContext } from "react";
import { ProfileInfo } from "../Profile";
import Icons from "./Icons";

function NavIcons(props) {
  const pinfo = useContext(ProfileInfo);

  const navIcons = pinfo.navigations.map((item, index) => (
    <Icons
      title={item.title}
      pagelink={item.pagelink}
      iclass={item.iclass}
      key={index}
      color={item.color}
    />
  ));

  return <>{navIcons}</>;
}

export default NavIcons;
