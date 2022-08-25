import React from "react";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import image from "../../Images/logo.png";
import Search from "./Search";
import RightMenu from "./RightMenu";
import { Header } from "../../Styled/Mui/Appbar.styled";
import { Navbar } from "../../Styled/Styles/Div.styled";
import { MenuButton } from "../../Styled/Mui/IconButton.styled";
import { LogoText } from "../../Styled/Styles/Img.styled";
import { useDispatch } from "react-redux";
import { togglemenu } from "../../features/menuSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handletoggle = () => dispatch(togglemenu());
  return (
    <>
      <Header>
        <Toolbar>
          <Navbar>
            <Tooltip title="Main Menu">
              <MenuButton onClick={handletoggle}>
                <MenuIcon />
              </MenuButton>
            </Tooltip>
            <LogoText src={image} />
          </Navbar>
          <Search />
          <RightMenu />
        </Toolbar>
      </Header>
    </>
  );
};

export default Head;
