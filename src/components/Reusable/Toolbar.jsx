import React, { useState } from "react";
import { Divider, Tooltip } from "@mui/material";
import {
  CustomButton,
  SideMenuButton,
} from "../../Styled/Mui/IconButton.styled";
import { LargeBlock } from "../../Styled/Styles/Div.styled";
import { PaginationText } from "../../Styled/Styles/Para.styled";
import { MenuListIcons } from "../../Styled/Styles/Img.styled";
import { CustomToolbar, HiddenMenu } from "../../Styled/Mui/Toolbar.styled";
import { CustomCheckBox } from "../../Styled/Mui/Checkbox.styled";
import { HideButtons, ReadCheck } from "../../Styled/Styles/Mail.styled";

const Toolbox = () => {
  const [selectstatus, setselect] = useState(false);
  const handleClick = (e) => setselect(e.target.checked);

  return (
    <>
      <CustomToolbar>
        <LargeBlock size="auto">
          <Tooltip title="Select">
            <LargeBlock size="auto">
              <CustomCheckBox checked={selectstatus} onChange={handleClick} />
              <CustomButton>
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
              </CustomButton>
            </LargeBlock>
          </Tooltip>
          <HiddenMenu view={selectstatus}>
            <Tooltip title="Archive">
              <HideButtons size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/archive_black_20dp.png" />
              </HideButtons>
            </Tooltip>
            <Tooltip title="Spam">
              <HideButtons size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/report_black_20dp.png" />
              </HideButtons>
            </Tooltip>
            <Tooltip title="Delete">
              <HideButtons size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png" />
              </HideButtons>
            </Tooltip>

            <Divider
              orientation="vertical"
              sx={{ margin: "0px 5px", height: "20px", alignSelf: "center" }}
              flexItem
            />
            <Tooltip title="Mark">
              <ReadCheck
                size="small"
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
            <Tooltip title="Add to tasks">
              <HideButtons size="large">
                <MenuListIcons src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/task_add_20_black_1x.png" />
              </HideButtons>
            </Tooltip>
            <Divider
              orientation="vertical"
              sx={{ margin: "0px 5px", height: "20px", alignSelf: "center" }}
              flexItem
            />
            <Tooltip title="Move to">
              <HideButtons size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/drive_file_move_black_20dp.png" />
              </HideButtons>
            </Tooltip>
            <Tooltip title="Labels">
              <HideButtons size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/label_black_20dp.png" />
              </HideButtons>
            </Tooltip>
          </HiddenMenu>
          {!selectstatus && (
            <Tooltip title="Refresh">
              <SideMenuButton size="large">
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/refresh_black_20dp.png" />
              </SideMenuButton>
            </Tooltip>
          )}
          <Tooltip title="More">
            <SideMenuButton size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/more_vert_black_20dp.png" />
            </SideMenuButton>
          </Tooltip>
        </LargeBlock>
        <LargeBlock size="auto">
          <PaginationText>1-50 of 1,508</PaginationText>
          <Tooltip title="Newer">
            <SideMenuButton size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/chevron_left_black_20dp.png" />
            </SideMenuButton>
          </Tooltip>
          <Tooltip title="Older">
            <SideMenuButton size="large">
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/chevron_right_black_20dp.png" />
            </SideMenuButton>
          </Tooltip>
          <LargeBlock size="auto">
            <Tooltip title="Toogle split pane mode">
              <CustomButton>
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/horizontal_split_black_20dp.png" />
              </CustomButton>
            </Tooltip>
            <CustomButton>
              <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png" />
            </CustomButton>
          </LargeBlock>
        </LargeBlock>
      </CustomToolbar>
    </>
  );
};

export default Toolbox;
