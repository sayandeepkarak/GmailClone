import styled from "styled-components";

export const TransparentInput = styled.input.attrs({
  type: "text",
  id: "searchInput",
  placeholder: "Search mail",
})`
  padding-right: 14px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  font-family: var(--popp);
  width: -webkit-fill-available;
  @media(max-width: 768px){
    display: ${props=> !props.open && "none"};
  }
`;

export const BottomLineInput = styled.input.attrs({
  type: "text",
})`
  min-height: 1.4375em;
  border: none;
  outline: none;
  width: -webkit-fill-available;
  border-bottom: 1px solid var(--light-border);
  &:focus {
    border-bottom: 1px solid rgb(35, 119, 214);
  }
`;
