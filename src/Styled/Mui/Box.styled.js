import styled from "styled-components";
import { Box } from "@mui/material";

export const CenterSpaceBox = styled(Box).attrs({
  sx: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
})``;

export const CenterBox = styled(Box).attrs({
  sx: {
    display: "flex",
    alignItems: "center",
  },
})``;
