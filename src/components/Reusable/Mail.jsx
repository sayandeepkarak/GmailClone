import React, { useState } from "react";
import {
  ImportantCheck,
  MailChecks,
  StarCheck,
  SubjectBlock,
  MainText,
  TitleTextBlock,
  DateTime,
  HideMenuBlock,
  ReadCheck,
  HideButtons,
} from "../../Styled/Styles/Mail.styled";
import { MenuListIcons } from "../../Styled/Styles/Img.styled";
import { CheckBoxBlock, MailStick } from "../../Styled/Styles/Mail.styled";
import { Tooltip } from "@mui/material";

const Mail = () => {
  const [readstatus, setread] = useState(false);
  const [selectstatus, setselect] = useState(false);
  const handleClick = (e) => setread(e.target.checked);

  const handleCheckboxChange = (e) => setselect(e.target.checked);

  return (
    <>
      <MailStick select={selectstatus}>
        <CheckBoxBlock>
          <MailChecks
            size="small"
            checked={selectstatus}
            onChange={handleCheckboxChange}
          />
          <StarCheck
            size="small"
            icon={
              <MenuListIcons
                src={`https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png`}
              />
            }
            checkedIcon={
              <MenuListIcons
                src={`https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png`}
              />
            }
          />
          <ImportantCheck
            size="small"
            icon={
              <MenuListIcons
                src={`https://www.gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png`}
              />
            }
            checkedIcon={
              <MenuListIcons
                src={`https://www.gstatic.com/images/icons/material/system/1x/label_important_googyellow500_20dp.png`}
              />
            }
          />
        </CheckBoxBlock>
        <SubjectBlock>
          <MainText read={readstatus}>Technology</MainText>
        </SubjectBlock>
        <TitleTextBlock>
          <MainText read={readstatus}>
            😀WhatsApps Security Will Now More Stronger Double Verification Code
            For Log In | Detail inside{"  -  "}
            <span>
              To stop receiving these emails, UnsubscribeTo stop receiving these
              emails, Unsubscribe
            </span>
          </MainText>
        </TitleTextBlock>
        <DateTime>Aug 2</DateTime>
        <HideMenuBlock>
          <Tooltip title="Archive">
            <HideButtons size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/archive_black_20dp.png" />
            </HideButtons>
          </Tooltip>
          <Tooltip title="Delete">
            <HideButtons size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png" />
            </HideButtons>
          </Tooltip>
          <Tooltip title="Mark">
            <ReadCheck
              size="small"
              checked={readstatus}
              onChange={handleClick}
              icon={
                <MenuListIcons
                  src={`https://www.gstatic.com/images/icons/material/system_gm/1x/markunread_black_20dp.png`}
                />
              }
              checkedIcon={
                <MenuListIcons
                  src={`https://www.gstatic.com/images/icons/material/system_gm/1x/drafts_black_20dp.png`}
                />
              }
            />
          </Tooltip>
          <Tooltip title="Snooze">
            <HideButtons size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/watch_later_black_20dp.png" />
            </HideButtons>
          </Tooltip>
        </HideMenuBlock>
      </MailStick>
    </>
  );
};

export default Mail;
