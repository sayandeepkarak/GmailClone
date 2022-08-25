import styled from "styled-components";
import { Menu, MenuItem } from "@mui/material";

export const SimpleMenu = styled(Menu).attrs({
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
})``;

export const SimpleMenuItem = styled(MenuItem).attrs({
  sx: {
    fontSize: "14px",
    padding: "6px 30px",
    letterSpacing: ".5px",
  },
})``;
