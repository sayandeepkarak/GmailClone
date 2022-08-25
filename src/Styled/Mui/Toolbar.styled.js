import styled from "styled-components";
import { Toolbar } from "@mui/material";
import { HideMenuBlock } from "../Styles/Mail.styled";

export const CustomToolbar = styled(Toolbar).attrs({
  sx: {
    width: "100%",
    justifyContent: "space-between",
    "@media (min-width: 600px)": {
      minHeight: "auto",
      padding: "2px 14px",
    },
  },
})``;

export const HiddenMenu = styled(HideMenuBlock).attrs({
  id: "hidden-toolbar-menu",
})`
  width: auto;
  margin-right: 0px;
  display: ${(props) => props.view && "flex"};
  gap: 10px;
`;
