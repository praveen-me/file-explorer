import React from 'react';
import DropDown from '../utils/DropDown';

const SideBar = () => {
	return (
		<div className="sidebar">
			<h2 className="sidebar__header">Root</h2>
			<div className="sidebar__list">
				<div className="sidebar__list-item sidebar__list-item--active">
					<h3 className="sidebar__list-item_title">Songs</h3>
					<DropDown />
				</div>
				<div className="sidebar__list-item">
					<h3 className="sidebar__list-item_title">Movies</h3>
					<DropDown />
				</div>
				<div className="sidebar__list-item">
					<h3 className="sidebar__list-item_title">Videos</h3>
				</div>
				<div className="sidebar__list-item">
					<div className="sidebar__list-item sidebar__list-item--expand">
						<h3 className="sidebar__list-item_title">My Test Folder</h3>
						<DropDown className="reverse-dropdown"/>
					</div>
					<div className="sidebar__list_sublist">
						<div className="sidebar__list_sublist-item">
							<h4 className="sidebar__list_sublist-item-title">Recordings</h4>
						</div>
						<div className="sidebar__list_sublist-item">
							<h4 className="sidebar__list_sublist-item-title">Designs</h4>
							<DropDown/>
						</div>
						<div className="sidebar__list_sublist-item">
							<h4 className="sidebar__list_sublist-item-title">Projects</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default SideBar;