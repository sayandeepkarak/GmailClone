import styled from "styled-components";
import { IconButton } from "@mui/material";

export const MenuButton = styled(IconButton).attrs({
  size: "large",
  edge: "start",
  sx: { mr: 2, color: "var(--logo)", marginRight: "3px" },
})``;

export const RoundButton = styled(IconButton).attrs({})``;

export const FilterButton = styled(IconButton).attrs((props) => ({
  sx: {
    marginLeft: "2px",
    "@media(max-width:768px)": {
      display: !props.open && " none",
    },
  },
}))``;

export const SideMenuButton = styled(IconButton).attrs({ sx: "2px" })``;

export const CustomButton = styled(SideMenuButton).attrs({
  sx: {
    borderRadius: "2px",
    width: "min-content",
    padding: "5px 0px",
    "&:hover": {
      img: {
        opacity: 1,
      },
    },
  },
})``;

export const AddOnesButton = styled(CustomButton).attrs({
  sx: {
    clipPath: "circle()",
  },
})``;

export const MoreButton = styled(FilterButton).attrs({
  sx: {
    position: "absolute",
    padding: "0px 6px",
    right: "0",
    height: "-webkit-fill-available",
    display: "none",
  },
})``;
