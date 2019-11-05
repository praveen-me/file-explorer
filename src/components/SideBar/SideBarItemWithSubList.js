import React, { useState } from "react";
import SubMenuList from "./SubMenuList";
import SideBarSubMenuTitle from "./SideBarSubMenuTitle";

const SideBarItemWithSubList = ({ name, data }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  let Wrapper = ({ children }) => <>{children}</>;

  const handleToggleMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  if (isSubMenuOpen) {
    Wrapper = ({ children }) => (
      <div className="sidebar__list-item">{children}</div>
    );
  }

  return (
    <Wrapper>
      <SideBarSubMenuTitle
        name={name}
        isOpen={isSubMenuOpen}
        toggleMenu={handleToggleMenu}
      />
      {isSubMenuOpen && <SubMenuList data={data} />}
    </Wrapper>
  );
};

export default SideBarItemWithSubList;
