import styled from "styled-components";

export const TabButtonArea = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  border-bottom: 1px solid #f1f3f4;
`;

export const TabButton = styled.button`
  position: relative;
  font-size: 13px;
  font-family: var(--popp);
  color: #5f6368;
  padding: 0px 20px;
  cursor: pointer;
  border: none;
  background: transparent;
  letter-spacing: 0.4px;
  width: 256px;
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 20px;
  :before {
    content: "";
    position: absolute;
    height: 3px;
    width: 230px;
    border-radius: 3px 3px 0px 0px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    background-color: transparent;
  }
  &:hover {
    img {
      opacity: 1;
    }
    background-color: #f4f7f7;
    color: black;
  }
  &.active {
    img {
      opacity: 1;
    }
    color: ${(props) => props.activecolor};
    :before {
      background-color: ${(props) => props.activecolor};
    }
  }
  @media (max-width: 1024px) {
    width: 33.33%;
    :before {
      width: 90%;
    }
  }
`;

export const TabContent = styled.div`
  width: 100%;
  height: 79vh;
  display: none;
  overflow: scroll;
  flex-direction: column;
  &.active {
    display: flex;
  }
`;
