import React, { useState } from "react";
import { Divider, ListItemIcon, Tooltip } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { SideMenuButton } from "../../Styled/Mui/IconButton.styled";
import { DefaultAvatar } from "../../Styled/Mui/Avtar.styled";
import { UserPopOver } from "../../Styled/Mui/User.styled";
import { UserPopupBox, UserTop } from "../../Styled/Styles/Div.styled";
import { ManageButton, SignOutButton } from "../../Styled/Styles/Button.styled";
import { SimpleStack } from "../../Styled/Mui/Stack.styled";
import { AllUsers, ListButton } from "../../Styled/Mui/List.styled";
import {
  BoldText,
  MiniBold,
  MiniText,
  SimpleText,
} from "../../Styled/Styles/Para.styled";
import profile from "../../Images/profile.jpg";

const User = () => {
  const [pop, setpop] = useState(null);
  const openpopup = Boolean(pop);
  const handleClick = (e) => setpop(e.currentTarget);
  const handleClose = () => setpop(null);
  return (
    <div>
      <Tooltip title="Google Account">
        <SideMenuButton
          aria-describedby={openpopup ? "user-popup" : undefined}
          onClick={handleClick}
        >
          <DefaultAvatar width={30} height={30} src={profile} />
        </SideMenuButton>
      </Tooltip>
      <UserPopOver
        open={openpopup}
        anchorEl={pop}
        onClose={handleClose}
        sx={{ borderRadius: "90px" }}
      >
        <UserPopupBox>
          <UserTop>
            <DefaultAvatar width="30%" height="auto" src={profile} />
            <center>
              <BoldText>Sayandeep Karak</BoldText>
              <SimpleText>Sayandeep18.webdev@gmail.com</SimpleText>
            </center>
            <ManageButton>Manage your Google Account</ManageButton>
          </UserTop>
          <Divider />
          <SimpleStack>
            <AllUsers disablePadding>
              <ListButton>
                <ListItemIcon>
                  <DefaultAvatar width={30} height={30} src={profile} />
                </ListItemIcon>
                <div className="accounts">
                  <MiniBold>Sayandeep Karak</MiniBold>
                  <MiniText>Sayandeep18.webdev@gmail.com</MiniText>
                </div>
              </ListButton>
            </AllUsers>
            <AllUsers disablePadding>
              <ListButton>
                <ListItemIcon>
                  <PersonAddAltOutlinedIcon />
                </ListItemIcon>
                <div className="accounts">
                  <MiniBold>Add another account</MiniBold>
                </div>
              </ListButton>
            </AllUsers>
            <Divider />
            <center>
              <SignOutButton>Sign out of all accounts</SignOutButton>
            </center>
            <Divider />
            <p id="copy_txt">
              Copyright © 2022 Sayandeep Karak. All rights reserved
            </p>
          </SimpleStack>
        </UserPopupBox>
      </UserPopOver>
    </div>
  );
};

export default User;
