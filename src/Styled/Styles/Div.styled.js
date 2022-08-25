import styled from "styled-components";

export const BodyArea = styled.div`
  display: flex;
  width: 100%;
  height: 91.5vh;
`;

export const InboxBlock = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: auto;
  flex-direction: column;
`;

export const StarredBlock = styled(InboxBlock)``;
export const SnoozedBlock = styled(InboxBlock)``;
export const SentBlock = styled(InboxBlock)``;
export const DraftsBlock = styled(InboxBlock)``;
export const ImportantBlock = styled(InboxBlock)``;
export const ChatsBlock = styled(InboxBlock)``;
export const ScheduledBlock = styled(InboxBlock)``;
export const AllMailBlock = styled(InboxBlock)``;
export const SpamBlock = styled(InboxBlock)``;
export const TrashBlock = styled(InboxBlock)``;
export const SocialBlock = styled(InboxBlock)``;
export const UpdatesBlock = styled(InboxBlock)``;
export const ForumsBlock = styled(InboxBlock)``;
export const PromotionBlock = styled(InboxBlock)``;

export const DataToolbarArea = styled.div`
  padding: 0px 5px;
  align-items: center;
  max-height: 48px;
  display: flex;
`;

export const AllMenu = styled.div`
  height: auto;
  width: auto;
  overflow: scroll;
`;

export const LargeBlock = styled.div`
  width: ${(props) => props.size === "large" && "80%"};
  width: ${(props) => props.size === "auto" && "auto"};
  width: ${(props) => props.size === "small" && "20%"};
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MailBlock = styled.div`
  overflow: scroll;
  width: 100%;
  height: auto;
`;

export const UserPopupBox = styled.div.attrs({
  id: "user-popup-box",
})`
  z-index: 1;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled(UserPopupBox).attrs({
  id: "navbar_logo",
})`
  width: auto;
  align-items: center;
  flex-direction: row;
  padding-right: 30px;
`;

export const Searchbar = styled(Navbar).attrs({ id: "search_bar" })`
  justify-content: space-between;
  background-color: var(--light-bg);
  min-width: 35%;
  width: 700px;
  border-radius: 10px;
  padding: 4px 10px;
  margin: 0px auto 0px 49px;
  @media (max-width: 768px) {
    ${(props) => props.open && "position: absolute"};
    background-color: ${(props) => !props.open && "transparent"};
    margin: ${(props) => (props.open ? "0px" : "0px 0px 0px auto")};
    padding: ${(props) => !props.open && "0px"};
    min-width: ${(props) => !props.open && "min-content"};
    width: ${(props) => (props.open ? "90%" : "min-content")};
  }
`;

export const UserTop = styled.div.attrs({
  id: "user-popup-top",
})`
  display: flex;
  flex-direction: column;
  padding: 11px 46px;
  align-items: center;
  justify-content: space-evenly;
  height: 211px;
  font-family: var(--roboto);
`;

export const MenuArea = styled.div.attrs({
  id: "side-menu-bar",
})`
  max-height: 91.5vh;
  padding-right: 16px;
  width: ${(props) => (props.view ? "308px" : "129px")};
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: all 0.2s linear;
  @media (max-width: 1070px) {
    ${(props) => props.view && "position: absolute"};
    background-color: #fff;
    height: 91.5vh;
    width: ${(props) => (props.view ? "308px" : "90px")};
    ${(props) => props.view && "box-shadow: 4px 8px 76px -1px #00000040"};
  }
`;

export const MenuTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: -webkit-fill-available;
  margin-left: 20px;
`;

export const BlockArea = styled.div`
  width: 100%;
  height: auto;
  display: ${(props) => (props.view ? "flex" : "none")};
  flex-direction: column;
`;

export const AddOnesArea = styled.div`
  margin-left: auto;
  border-left: 1px solid #f1f3f4;
  display: flex;
  gap: 23px;
  width: 70px;
  flex-direction: column;
  padding: 6px;
  @media (max-width: 768px) {
    position: fixed;
    background-color: white;
    width: 100vw;
    flex-direction: row;
    height: 70px;
    justify-content: center;
    bottom: 0;
    hr {
      transform: rotate(90deg);
      width: 4%;
    }
  }
`;
