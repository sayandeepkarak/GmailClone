import styled from "styled-components";

export const BoldText = styled.p`
  font-weight: bold;
  color: #3c3f41;
  letter-spacing: 0.4px;
  font-family: var(--roboto);
`;
export const SimpleText = styled.p`
  font-size: 15px;
  color: var(--logo);
  margin-top: 3px;
`;
export const MiniBold = styled(BoldText)`
  color: default;
  font-size: 15px;
  letter-spacing: 0.2px;
`;
export const MiniText = styled(SimpleText)`
  font-size: 13px;
  margin-top: 4px;
  font-family: var(--roboto);
`;

export const PaginationText = styled(MiniText).attrs({
  className: "text",
})`
  user-select: none;
  padding: 10px;
  align-self: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: #5f636817;
  }
  @media (max-width: 1070px) {
    padding: 0px;
  }
`;
export const ComposeText = styled(MiniBold)`
  font-family: var(--popp);
  font-size: small;
  letter-spacing: 0.4px;
  color: var(--theme-red);
  opacity: 0.9;
`;
