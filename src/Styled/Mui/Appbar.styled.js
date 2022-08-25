import styled from "styled-components";
import { AppBar } from "@mui/material";

export const Header = styled(AppBar).attrs({
  color: "",
  sx: {
    boxShadow: 0,
    border: "1px solid var(--light-border) ",
    position: "unset",
    "@media(min-width:600px)": {
      paddingRight: "5px",
    },
  },
})``;
