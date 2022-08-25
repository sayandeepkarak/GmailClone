import styled from "styled-components";
import { Stack } from "@mui/material";

export const SimpleStack = styled(Stack).attrs({
  direction: "column",
})``;
export const ColStack = styled(Stack).attrs({
  direction: "column",
  spacing: 3,
})``;

export const RowStack = styled(Stack).attrs({
  sx: { alignSelf: "end", alignItems: "center" },
  direction: "row",
  spacing: 2,
})``;
