import React, {  useState } from "react";
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
import { remove } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { getValue } from "../../features/userSlice";
import { auth, provider } from "../../fire";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useSelector } from "react-redux";

const User = () => {
  document.body.onload = () => {
    getRedirectResult(auth)
      .then((result) => {
        if (result == null) {
          login();
        } else {
          dispatch(getValue(result.user));
          console.log(result);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
      });
  };
  const userdata = useSelector((state) => state.userSlice.value);
  const [pop, setpop] = useState(null);
  const openpopup = Boolean(pop);
  const handleClick = (e) => setpop(e.currentTarget);
  const handleClose = () => setpop(null);
  const dispatch = useDispatch();
  const login = () => signInWithRedirect(auth, provider);
  const logout = () => {
    setpop(null);
    dispatch(remove());
    login();
  };
  return (
    <div>
      <Tooltip title="Google Account">
        <SideMenuButton
          aria-describedby={openpopup ? "user-popup" : undefined}
          onClick={handleClick}
        >
          <DefaultAvatar width={30} height={30} src={userdata.photo} />
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
            <DefaultAvatar width="30%" height="auto" src={userdata.photo} />
            <center>
              <BoldText>{userdata.name}</BoldText>
              <SimpleText>{userdata.email}</SimpleText>
            </center>
            <ManageButton>Manage your Google Account</ManageButton>
          </UserTop>
          <Divider />
          <SimpleStack>
            <AllUsers disablePadding>
              <ListButton>
                <ListItemIcon>
                  <DefaultAvatar width={30} height={30} src={userdata.photo} />
                </ListItemIcon>
                <div className="accounts">
                  <MiniBold>{userdata.name}</MiniBold>
                  <MiniText>{userdata.email}</MiniText>
                </div>
              </ListButton>
            </AllUsers>
            <AllUsers disablePadding>
              <ListButton onClick={login}>
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
              <SignOutButton onClick={logout}>
                Sign out of all accounts
              </SignOutButton>
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
