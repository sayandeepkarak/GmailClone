import React from "react";
import { useState } from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { Divider, Tooltip } from "@mui/material";
import { SideMenuButton } from "../../Styled/Mui/IconButton.styled";
import { SimpleMenu, SimpleMenuItem } from "../../Styled/Mui/Menu.styled";

const Support = () => {
  const [menu, setMenu] = useState(null);
  const openpop = Boolean(menu);
  const handleClick = (e) => setMenu(e.currentTarget);
  const handleClose = () => setMenu(null);
  return (
    <>
      <Tooltip title="Support">
        <SideMenuButton
          id="support-btn"
          onClick={handleClick}
          aria-controls={openpop ? "support-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openpop ? "true" : undefined}
        >
          <HelpOutlineRoundedIcon />
        </SideMenuButton>
      </Tooltip>
      <SimpleMenu
        id="support-menu"
        anchorEl={menu}
        open={openpop}
        MenuListProps={{
          "aria-labelledby": "support-btn",
        }}
        onClose={handleClose}
      >
        <SimpleMenuItem onClick={handleClose}>Help</SimpleMenuItem>
        <SimpleMenuItem onClick={handleClose}>Training</SimpleMenuItem>
        <SimpleMenuItem onClick={handleClose}>Updates</SimpleMenuItem>
        <Divider />
        <SimpleMenuItem onClick={handleClose}>
          Send feedback to Google
        </SimpleMenuItem>
      </SimpleMenu>
    </>
  );
};

export default Support;
