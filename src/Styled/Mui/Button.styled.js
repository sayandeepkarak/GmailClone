import styled from "styled-components";
import { Button } from "@mui/material";

export const TransparentButton = styled(Button).attrs({
  size: "medium",
  sx: {
    letterSpacing: ".5px",
    color: "#747474",
    fontWeight: "bold",
    fontFamily: "var(--popp)",
    padding: "0px 16px",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "#5e698414",
    },
  },
})``;
export const ContainedButton = styled(Button).attrs({
  size: "medium",
  variant: "contained",
  sx: {
    letterSpacing: ".5px",
    fontFamily: "var(--popp)",
    textTransform: "initial",
    backgroundColor: "#1a73e8",
    "&:hover": {
      backgroundColor: "#1a73e8",
      boxShadow: "0 5px 15px rgba(21,105,192, .4)",
    },
  },
})``;
