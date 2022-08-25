import styled from "styled-components";
import { Avatar } from "@mui/material";

export const DefaultAvatar = styled(Avatar).attrs((props) => ({
  sx: { width: props.width, height: props.height },
}))``;
