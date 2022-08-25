import React from "react";
import Tooltip from "@mui/material/Tooltip";
import AppsOutageRoundedIcon from "@mui/icons-material/AppsOutageRounded";
import Support from "./Support";
import Setting from "./Setting";
import User from "./User";
import { SideMenuButton } from "../../Styled/Mui/IconButton.styled";

const RightMenu = () => {
  return (
    <>
      <Support />
      <Setting />
      <Tooltip title="Apps">
        <SideMenuButton>
          <AppsOutageRoundedIcon />
        </SideMenuButton>
      </Tooltip>
      <User />
    </>
  );
};

export default RightMenu;
