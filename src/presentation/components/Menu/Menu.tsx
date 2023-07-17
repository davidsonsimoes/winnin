import React from "react";
import { MenuWrapper } from "./style";
import Button from "@components/Button";

interface MenuProps {
  activeFilter: string;
  onMenuClick: (filter: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeFilter, onMenuClick }) => {
  return (
    <MenuWrapper>
      <Button
        isActive={activeFilter === "hot"}
        onMenuClick={() => onMenuClick("hot")}
      >
        Hot
      </Button>
      <Button
        isActive={activeFilter === "new"}
        onMenuClick={() => onMenuClick("new")}
      >
        New
      </Button>
      <Button
        isActive={activeFilter === "rising"}
        onMenuClick={() => onMenuClick("rising")}>
            Rising
        </Button>
    </MenuWrapper>
  );
};

export default Menu;
