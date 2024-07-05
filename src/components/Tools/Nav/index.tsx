import React from "react";
import NavLinkComponent from "./NavLink";
import WarningSvg from "../../../assets/icons/tools/Warning.svg";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <NavLinkComponent text="Maintenance" link="/" svg={WarningSvg} />
    </div>
  );
};

export default Nav;
