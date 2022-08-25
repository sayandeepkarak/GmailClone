import styled from "styled-components";

export const ManageButton = styled.button.attrs({
  id: "manage_account",
})`
  padding: 7px 17px;
  background: transparent;
  border: 1px solid #e1e5e8;
  border-radius: 40px;
  font-family: var(--popp);
  color: #434343;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(87, 87, 87, 0.034);
  }
`;

export const SignOutButton = styled(ManageButton).attrs({
  id: "signout_all",
})`
  margin: 20px;
  padding: 9px 24px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(87, 87, 87, 0.034);
  }
`;

export const ComposeButton = styled.button.attrs({
  id: "compose-btn",
})`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  margin: ${(props) =>
    props.view ? "12px auto 15px 3%" : "12px auto 15px 11px"};
  padding: 0px 3%;
  width: ${(props) => (props.view ? "150px" : "50px")};
  height: 50px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  border-radius: ${(props) => (props.view ? "27px" : "50%")};
  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  p {
    display: ${(props) => !props.view && "none"};
  }
  &:hover {
    box-shadow: 0 7px 15px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;

export const ExpandSwitch = styled.button`
  display: flex;
  border: none;
  outline: none;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-left: ${(props) => !props.view && "17px"};
  width: ${(props) => (props.view ? "100%" : "min-content")};
  color: black;
  padding: ${(props) => (props.view ? "7px 13px 7px 24px" : "7px")};
  border-radius: ${(props) => props.view && "0px 16px 16px 0px"};
  text-decoration: none;
  clip-path: ${(props) => !props.view && "circle()"};
  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  div {
    display: ${(props) => !props.view && "none"};
  }
  &:hover {
    background-color: #edf0f3;
  }
`;

export const CategoriesSwitch = styled(ExpandSwitch)`
  padding: ${(props) => (props.view ? "7px 13px 7px 3px" : "7px")};
  img:nth-child(2) {
    opacity: 1;
  }
  font-weight: ${(props) => !props.active && "bold"};
`;

export const SimpleSwitch = styled(ExpandSwitch)``;
