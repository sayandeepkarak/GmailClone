import React, { useState } from "react";
import {
  BottomButtons,
  ButtonIcons,
  ComposeBox,
  ControlArea,
  ControlButton,
  Form,
  HeadText,
  IndividualBlock,
  Input,
  InputArea,
  InputBlock,
  Labels,
  MiniMizeIcon,
  MoreSendOption,
  SendButton,
  SendButtonArea,
  TextArea,
  TextToolBarArea,
  ToolBarButtons,
  TopHeader,
  VerticalDivider,
} from "../../../Styled/Styles/Compose.styled";
import ClearIcon from "@mui/icons-material/Clear";
import { Tooltip } from "@mui/material";

const Compose = (props) => {
  const [minimize, setminimize] = useState(false);
  const [fullscreen, setfullscreen] = useState(false);
  const [viewLabel, setviewLabel] = useState(false);
  const [viewcc, setviewcc] = useState(false);
  const [viewbcc, setviewbcc] = useState(false);
  const [viewtoolbar, setviewtoolbar] = useState(true);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const changeto = (e) => setTo(e.target.value);
  const changesubject = (e) => setSubject(e.target.value);
  const changemessage = (e) => setMessage(e.target.value);

  const sendmessage = (e) => {
    e.preventDefault();
    setTo("");
    setSubject("");
    setMessage("");
  };

  const fullscreenIcon = fullscreen
    ? "https://ssl.gstatic.com/ui/v1/icons/mail/collapse_window.png"
    : "https://ssl.gstatic.com/ui/v1/icons/mail/expand_window.png";
  const handleminimize = () => {
    setfullscreen(false);
    setminimize(!minimize);
  };
  const handlefullscreen = () => {
    setminimize(false);
    setfullscreen(!fullscreen);
  };
  const handleClose = () => {
    props.hide();
    setminimize(false);
    setfullscreen(false);
  };
  const handleviewlabel = (e) => setviewLabel(true);

  const handleviewcc = () => setviewcc(true);
  const hideviewcc = (e) => e.target.value === "" && setviewcc(false);

  const handleviewbcc = () => setviewbcc(true);
  const hideviewbcc = (e) => e.target.value === "" && setviewbcc(false);

  const handleviewtoolbar = () => setviewtoolbar(!viewtoolbar);

  return (
    <>
      <ComposeBox
        view={fullscreen}
        minimizescreen={minimize}
        viewpop={props.visible}
      >
        <TopHeader>
          <HeadText>New Message</HeadText>
          <ControlArea>
            <Tooltip title={minimize ? "Maximize" : "Minimize"}>
              <ControlButton onClick={handleminimize}>
                <MiniMizeIcon pos={minimize}></MiniMizeIcon>
              </ControlButton>
            </Tooltip>
            <Tooltip title={fullscreen ? "Exit fullscreen" : "Fullscreen"}>
              <ControlButton onClick={handlefullscreen}>
                <ButtonIcons src={fullscreenIcon} />
              </ControlButton>
            </Tooltip>
            <Tooltip title="Save & Close">
              <ControlButton onClick={handleClose}>
                <ClearIcon style={{ fontSize: "1.2rem" }} />
              </ControlButton>
            </Tooltip>
          </ControlArea>
        </TopHeader>
        {!minimize && (
          <>
            <Form onSubmit={sendmessage}>
              <InputArea>
                <InputBlock>
                  <IndividualBlock>
                    {!viewLabel && (
                      <Labels onClick={handleviewlabel}>Recipients</Labels>
                    )}
                    {viewLabel && (
                      <Labels>{viewLabel ? "To" : "Recipients"}</Labels>
                    )}
                    <Input
                      onFocus={handleviewlabel}
                      type="email"
                      required
                      value={to}
                      onChange={changeto}
                    />
                    {viewLabel && (
                      <>
                        {!viewcc && <Labels onClick={handleviewcc}>Cc</Labels>}
                        {!viewbcc && (
                          <Labels onClick={handleviewbcc}>Bcc</Labels>
                        )}
                      </>
                    )}
                  </IndividualBlock>
                  {viewcc && (
                    <IndividualBlock>
                      <Labels>Cc</Labels>
                      <Input onBlur={hideviewcc} />
                    </IndividualBlock>
                  )}
                  {viewbcc && (
                    <IndividualBlock>
                      <Labels>Bcc</Labels>
                      <Input onBlur={hideviewbcc} />
                    </IndividualBlock>
                  )}
                </InputBlock>
                <InputBlock>
                  <IndividualBlock>
                    <Input
                      placeholder="Subject"
                      value={subject}
                      required
                      onChange={changesubject}
                    />
                  </IndividualBlock>
                </InputBlock>
                <TextArea
                  view={fullscreen}
                  value={message}
                  onChange={changemessage}
                >
                  <pre></pre>
                </TextArea>
              </InputArea>
              <TextToolBarArea view={viewtoolbar}>
                <Tooltip title="Undo">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/undo_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Redo">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/redo_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <VerticalDivider flexItem />
                <Tooltip title="Font">
                  <ToolBarButtons style={{ gap: "10px" }}>
                    Roboto
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <VerticalDivider flexItem />
                <Tooltip title="Size">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_size_black_20dp.png" />
                    <ButtonIcons src="	https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <VerticalDivider flexItem />
                <Tooltip title="Bold">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_bold_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Italic">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_italic_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Underline">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_underlined_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Text color">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/text_format_black_20dp.png" />
                    <ButtonIcons src="	https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <VerticalDivider flexItem />
                <Tooltip title="Align">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_align_left_black_20dp.png" />
                    <ButtonIcons src="	https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Numbered list">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_list_numbered_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Bullated list">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_list_bulleted_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Indent less">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_indent_decrease_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Indent more">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/format_indent_increase_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <VerticalDivider flexItem />
                <Tooltip title="More formatting options">
                  <ToolBarButtons>
                    <ButtonIcons src="	https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
              </TextToolBarArea>
              <BottomButtons>
                <SendButtonArea>
                  <Tooltip title="Send">
                    <SendButton type="submit">Send</SendButton>
                  </Tooltip>
                  <Tooltip title="More send Options">
                    <MoreSendOption>
                      <ButtonIcons src="	https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_white_20dp.png" />
                    </MoreSendOption>
                  </Tooltip>
                </SendButtonArea>
                <Tooltip title="Formatting options" onClick={handleviewtoolbar}>
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/text_format_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Attach files">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/attach_file_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Insert link">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_link_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Insert emoji">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_emoticon_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Insert files using drive">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/drive_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Insert photo">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_photo_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Toogle confidential mode">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system/1x/lock_clock_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="More options">
                  <ToolBarButtons>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/more_vert_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
                <Tooltip title="Discard draft">
                  <ToolBarButtons style={{ marginLeft: "auto" }}>
                    <ButtonIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png" />
                  </ToolBarButtons>
                </Tooltip>
              </BottomButtons>
            </Form>
          </>
        )}
      </ComposeBox>
    </>
  );
};

export default Compose;
