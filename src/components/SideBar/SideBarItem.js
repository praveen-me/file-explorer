import React from "react";

const SideBarItem = ({ name, type, isSublistItem }) => {
  let mainClassName = isSublistItem
    ? "sidebar__list_sublist-item"
    : "sidebar__list-item";

  let Wrapper = ({ children }) => (
    <div className={mainClassName}>{children}</div>
  );

  return (
    <Wrapper>
      {isSublistItem ? (
        <h3 className="sidebar__list-item_name">{name}</h3>
      ) : (
        <h4 className="sidebar__list-item_title">{name}</h4>
      )}
    </Wrapper>
  );
};

export default SideBarItem;
