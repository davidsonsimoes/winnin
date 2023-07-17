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
        isactive={activeFilter === "hot"}
        onMenuClick={() => onMenuClick("hot")}
      >
        Hot
      </Button>
      <Button
        isactive={activeFilter === "new"}
        onMenuClick={() => onMenuClick("new")}
      >
        New
      </Button>
      <Button
        isactive={activeFilter === "rising"}
        onMenuClick={() => onMenuClick("rising")}>
            Rising
        </Button>
    </MenuWrapper>
  );
};

export default Menu;
