import React from "react";
import { MenuBadge, MenuList, MenuName } from "../../Styled/Styles/Link.styled";
import { MenuTextBlock } from "../../Styled/Styles/Div.styled";
import { MenuListIcons } from "../../Styled/Styles/Img.styled";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";

const MenuItems = (props) => {
  const togglemenu = useSelector((state) => state.menuReducer.value);

  return (
    <>
      <Tooltip title={props.linkname} placement="right">
        <MenuList
          end={true}
          to={props.linkpath}
          badge={props.linkbadge}
          view={togglemenu}
        >
          <MenuListIcons src={props.logo} />
          <MenuTextBlock>
            <MenuName>{props.linkname}</MenuName>
            {props.linkbadge > 0 && <MenuBadge>{props.linkbadge}</MenuBadge>}
          </MenuTextBlock>
        </MenuList>
      </Tooltip>
    </>
  );
};

export default MenuItems;
