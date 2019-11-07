import React, { useState } from "react";
import SubMenuList from "./SubMenuList";
import SideBarSubMenuTitle from "./SideBarSubMenuTitle";

const SideBarItemWithSubList = ({ name, data, fullPath }) => {
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
        isChildren={data.length > 0}
        fullPath={fullPath}
      />
      {data.length > 0 && isSubMenuOpen && (
        <SubMenuList data={data} fullPath={fullPath} />
      )}
    </Wrapper>
  );
};

export default SideBarItemWithSubList;
