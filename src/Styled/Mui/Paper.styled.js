import styled from "styled-components";
import { Paper } from "@mui/material";

export const FilterPopup = styled(Paper).attrs({
  id: "filter-popup",
  sx: {
    padding: "19px",
    position: "absolute",
    top: 57,
    minWidth: "41.5%",
    "@media(max-width: 768px)": {
      minWidth: "100%",
      position: "absolute",
      left: 0,
    },
  },
  elevation: 3,
})``;
