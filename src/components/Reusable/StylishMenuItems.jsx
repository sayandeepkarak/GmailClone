import React from "react";
import {
  MenuBadge,
  MenuName,
  StylishMenulist,
} from "../../Styled/Styles/Link.styled";
import { MenuTextBlock } from "../../Styled/Styles/Div.styled";
import { LogoText, MenuListIcons } from "../../Styled/Styles/Img.styled";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { MoreButton } from "../../Styled/Mui/IconButton.styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StylishMenuItems = (props, i) => {
  const togglemenu = useSelector((state) => state.menuReducer.value);

  return (
    <>
      <Tooltip title={props.linkname} placement="right">
        <StylishMenulist
          end={true}
          to={props.linkpath}
          active={props.active}
          badge={props.linkbadge}
          view={togglemenu}
          hasparent={props.hasparent}
        >
          <LogoText src={props.logo} />
          <MenuListIcons src={props.alternatelogo} />
          <MenuTextBlock>
            {togglemenu && (
              <MenuName active={props.active}>{props.linkname}</MenuName>
            )}
            {props.linkbadge > 0 && <MenuBadge>{props.linkbadge}</MenuBadge>}
            {props.hasparent && (
              <MoreButton>
                <MoreVertIcon />
              </MoreButton>
            )}
          </MenuTextBlock>
        </StylishMenulist>
      </Tooltip>
    </>
  );
};

export default StylishMenuItems;
