import React from "react";
import { MenuWrapper, MenuButton } from "./style";

interface MenuProps {
  activeFilter: string;
  onMenuClick: (filter: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeFilter, onMenuClick }) => {
  return (
    <MenuWrapper>
      <MenuButton
        isActive={activeFilter === "hot"}
        onClick={() => onMenuClick("hot")}
      >
        Hot
      </MenuButton>
      <MenuButton
        isActive={activeFilter === "new"}
        onClick={() => onMenuClick("new")}
      >
        New
      </MenuButton>
      <MenuButton
        isActive={activeFilter === "new"}
        onClick={() => onMenuClick("rising")}>
            Rising
        </MenuButton>
    </MenuWrapper>
  );
};

export default Menu;
