import React, {useState} from "react";
import DropDown from "../utils/DropDown";
import SideBarItem from "./SideBarItem";
import SubMenuList from "./SubMenuList";

const SideBarItemWithSubList = ({ title, expanded }) => {
	const [isSubMenuOpen, setIsSubMennuOpen] = useState(true);

	let Wrapper = ({ children }) => <>{children}</>;

	if (isSubMenuOpen) {
		Wrapper = ({ children }) => <div className="sidebar__list-item">{children}</div>;
	}

  return (
    <Wrapper>
			<SideBarItem title={title} isNestedMenu expand isOpen={isSubMenuOpen}/>
      {
				isSubMenuOpen && (
					<SubMenuList />
				)
			}
    </Wrapper>
  );
};

export default SideBarItemWithSubList;
