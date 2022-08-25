import React from "react";
import Tooltip from "@mui/material/Tooltip";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useDispatch } from "react-redux";
import { toggleSetting } from "../../features/settingSlice";
import { SideMenuButton } from "../../Styled/Mui/IconButton.styled";

const Setting = () => {
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleSetting());
  return (
    <>
      <Tooltip title="Settings">
        <SideMenuButton onClick={toggle}>
          <SettingsRoundedIcon />
        </SideMenuButton>
      </Tooltip>
    </>
  );
};

export default Setting;
