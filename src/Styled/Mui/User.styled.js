import styled from "styled-components";
import { Popover } from "@mui/material";

export const UserPopOver = styled(Popover).attrs({
  id: "user-popup",
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
})``;
