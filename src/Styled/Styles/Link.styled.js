import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuList = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => (props.view ? " width:100%" : " width:min-content")};
  color: black;
  ${(props) => !props.view && "margin-left: 17px"};
  ${(props) => (props.view ? "padding:7px 13px 7px 24px" : "padding:7px")};
  ${(props) => props.view && "border-radius: 0px 16px 16px 0px"};
  text-decoration: none;
  ${(props) => props.badge > 0 && "font-weight: bold"};
  ${(props) => !props.view && "clip-path: circle()"};
  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  div {
    ${(props) => !props.view && "display: none"};
  }
  &:hover {
    background-color: #edf0f3;
  }
  &.active {
    background-color: #e8eaed;
    color: black;
    p {
      font-weight: bold;
    }
  }
`;

export const StylishMenulist = styled(MenuList)`
  position: relative;
  padding: ${(props) =>
    props.hasparent === "yes" ? "6px 13px 6px 45px" : "7px 13px 7px 24px"};
  ${(props) => !props.view && "padding: 7px"};
  div {
    ${(props) => !props.view && "display: none"};
  }
  img:nth-child(1) {
    display: none;
  }
  img:nth-child(2) {
    display: block;
  }
  &:hover {
    p:nth-child(2) {
      ${(props) => props.hasparent && "display:none"};
    }
    button {
      display: inline-flex;
    }
  }
  &.active {
    p {
      color: ${(props) => props.active[0]};
    }
    background-color: ${(props) => props.active[1]};
    img:nth-child(1) {
      display: block;
    }
    img:nth-child(2) {
      display: none;
    }
  }
`;

export const MenuName = styled.p`
  font-family: var(--roboto);
  text-transform: capitalize;
  letter-spacing: 0.4px;
  font-size: 14px;
`;

export const MenuBadge = styled(MenuName)`
  font-size: 12px;
  color: var(--logo);
`;
