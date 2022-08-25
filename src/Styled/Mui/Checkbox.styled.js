import styled from "styled-components";
import { Checkbox } from "@mui/material";

export const DefaultCheckBox = styled(Checkbox).attrs({
  color: "default",
})``;

export const CustomCheckBox = styled(DefaultCheckBox).attrs({
  size: "small",
  color: "default",
  sx: {
    borderRadius: "2px",
    width: "min-content",
    alignSelf: "center",
    padding: "5px 1px",
  },
})``;
