import { Divider } from "@mui/material";
import styled from "styled-components";

export const ComposeBox = styled.div`
  display: ${(props) => (props.viewpop ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  position: absolute;
  bottom: ${(props) => (props.view ? "36px" : " 0")};
  right: ${(props) => (props.view ? "12%" : " 70px")};
  min-height: ${(props) => (props.view ? "90vh" : " 560px")};
  width: ${(props) => (props.view ? "78vw" : " 600px")};
  ${(props) => props.view && "top: 44px"};
  box-shadow: 0px 8px 10px ${(props) => (props.view ? "100" : ".5")}vw
    rgb(0 0 0 / 14%);
  ${(props) => props.minimizescreen && "min-height: 40px"};
  ${(props) => props.minimizescreen && "width: 300px"};
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

export const TopHeader = styled.div`
  background-color: #404040;
  border-radius: 10px 10px 0px 0px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 0px 16px;
`;

export const HeadText = styled.p`
  font-family: var(--roboto);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 20px;
  color: white;
`;

export const ControlArea = styled.div`
  display: flex;
`;

export const ControlButton = styled.button`
  color: white;
  opacity: 0.5;
  height: 24px;
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fffcfc5c;
    opacity: 1;
  }
`;

export const ButtonIcons = styled.img.attrs({
  alt: "x",
})``;

export const MiniMizeIcon = styled.div`
  width: 45%;
  height: 2px;
  background-color: white;
  margin: 7px 0px;
  align-self: ${(props) => (props.pos ? "start" : "end")};
`;

export const Form = styled.form`
  height: auto;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 16px;
  height: -webkit-fill-available;
`;

export const InputBlock = styled.div`
  height: auto;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px;
`;

export const IndividualBlock = styled.div`
  width: 100%;
  margin: 5px 0px;
  display: flex;
  align-items: center;
`;

export const Labels = styled(HeadText)`
  font-weight: 100;
  margin-right: 5px;
  color: #777;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  margin-right: 5px;
  width: -webkit-fill-available;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--roboto);
  font-size: 14px;
  opacity: 0.9;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: ${(props) => (props.view ? "28vw" : "335px")};
  margin: 15px 0px;
  border: none;
  background: transparent;
  outline: none;
  font-family: var(--roboto);
  font-size: 14px;
  opacity: 0.9;
  resize: none;
  overflow-y: scroll;
`;

export const TextToolBarArea = styled.div`
  align-self: start;
  border-radius: 4px;
  margin: 5px 16px;
  padding: 3px 3px;
  width: 570px;
  box-shadow: -1px 5px 8px 1px rgb(0 0 0 / 14%);
  display: ${(props) => (props.view ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

export const ToolBarButtons = styled(ControlButton)`
  width: auto;
  min-height: 28px;
  padding: 0px 3px;
  opacity: 0.7;
  border-radius: 2px;
  font-family: var(--roboto);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: black;
  &:hover {
    background-color: #e3e3e3db;
    opacity: 0.9;
  }
`;

export const VerticalDivider = styled(Divider).attrs({
  orientation: "vertical",
  sx: { height: "18px", alignSelf: "center" },
})``;

export const BottomButtons = styled(TextToolBarArea)`
  width: 95%;
  margin: 16px 16px;
  box-shadow: none;
  padding: 3px 0px;
  display: flex;
  justify-content: start;
  gap: 5px;
`;

export const SendButtonArea = styled.div`
  width: auto;
  height: auto;
  border-radius: 4px;
  background-color: #1a73e8;
  display: flex;
  &:hover {
    background-color: #297be6;
    box-shadow: 0px 1px 2px 0 rgb(26 115 232 / 45%),
      0px 1px 3px 0 rgb(26 115 232 / 30%);
  }
`;

export const SendButton = styled.button`
  background: transparent;
  border: none;
  max-width: 104px;
  min-width: 72px;
  height: 36px;
  font-family: var(--roboto);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.4px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoreSendOption = styled(SendButton)`
  min-width: 24px;
  padding: 0;
  border-left: 1px solid #00000038;
`;

export const ForamtOption = styled(ToolBarButtons)``;
