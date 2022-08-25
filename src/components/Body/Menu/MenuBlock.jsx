import React, { useState } from "react";
import {
  AllMenu,
  BlockArea,
  LargeBlock,
  MenuArea,
} from "../../../Styled/Styles/Div.styled";
import {
  CategoriesSwitch,
  ComposeButton,
  ExpandSwitch,
} from "../../../Styled/Styles/Button.styled";
import { LogoText } from "../../../Styled/Styles/Img.styled";
import { ComposeText } from "../../../Styled/Styles/Para.styled";
import MenuItems from "../../Reusable/MenuList";
import StylishMenuItems from "../../Reusable/StylishMenuItems";
import { MenuName } from "../../../Styled/Styles/Link.styled";
import { MenuTextBlock } from "../../../Styled/Styles/Div.styled";
import { MenuListIcons } from "../../../Styled/Styles/Img.styled";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import Compose from "./Compose";

const MenuBlock = () => {
  const togglemenu = useSelector((state) => state.menuReducer.value);
  const [viewCompose, setcompose] = useState(false);
  const [expandMenu, setexpandMenu] = useState(false);
  const [expandCategories, setexpandCategories] = useState(false);
  const handleexpand = () => setexpandMenu(!expandMenu);
  const handlecategories = () => setexpandCategories(!expandCategories);
  const displayCompose = () => setcompose(true);
  const hideCompose = () => setcompose(false);
  const expandicon = expandMenu
    ? "https://www.gstatic.com/images/icons/material/system_gm/1x/expand_less_black_20dp.png"
    : "https://www.gstatic.com/images/icons/material/system_gm/1x/expand_more_black_20dp.png";
  const expandtext = expandMenu ? "less" : "more";

  const categoriesicon = expandCategories
    ? "https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_drop_down_black_20dp.png"
    : "https://www.gstatic.com/images/icons/material/system_gm/1x/arrow_right_black_20dp.png";

  return (
    <>
      <MenuArea view={togglemenu}>
        <LargeBlock size="auto">
          <ComposeButton view={togglemenu} onClick={displayCompose}>
            <LogoText src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/create_gm_red_24_1x.png" />
            <ComposeText>Compose</ComposeText>
          </ComposeButton>
          <Compose visible={viewCompose} hide={hideCompose} />
        </LargeBlock>
        <AllMenu>
          <BlockArea view={true}>
            <StylishMenuItems
              linkpath="/inbox"
              linkname="Inbox"
              linkbadge={1343}
              active={["#d93025", "#fce8e6"]}
              logo="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
              alternatelogo="https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png"
            />
            <MenuItems
              linkpath="starred"
              linkname="Starred"
              linkbadge={0}
              logo="https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_black_20dp.png"
            />
            <MenuItems
              linkpath="snozzed"
              linkname="Snozzed"
              linkbadge={0}
              logo="https://www.gstatic.com/images/icons/material/system_gm/1x/watch_later_black_20dp.png"
            />
            <MenuItems
              linkpath="sent"
              linkname="Sent"
              linkbadge={0}
              logo="https://www.gstatic.com/images/icons/material/system_gm/1x/send_black_20dp.png"
            />
            <MenuItems
              linkpath="drafts"
              linkname="Drafts"
              linkbadge={71}
              logo="https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_black_20dp.png"
            />
            <ExpandSwitch onClick={handleexpand} view={togglemenu}>
              <MenuListIcons src={expandicon} />
              <MenuTextBlock>
                {togglemenu && <MenuName>{expandtext}</MenuName>}
              </MenuTextBlock>
            </ExpandSwitch>
            <BlockArea view={expandMenu}>
              <MenuItems
                linkpath="important"
                linkname="Important"
                linkbadge={0}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/label_important_outline_black_20dp.png"
              />
              <MenuItems
                linkpath="chats"
                linkname="Chats"
                linkbadge={0}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/chat_black_20dp.png"
              />
              <MenuItems
                linkpath="scheduled"
                linkname="Scheduled"
                linkbadge={0}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_send_black_20dp.png"
              />
              <MenuItems
                linkpath="all"
                linkname="All Mail"
                linkbadge={0}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/mail_outline_black_20dp.png"
              />
              <MenuItems
                linkpath="spam"
                linkname="Spam"
                linkbadge={3}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/report_black_20dp.png"
              />
              <MenuItems
                linkpath="trash"
                linkname="Trash"
                linkbadge={0}
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/delete_black_20dp.png"
              />
              <Tooltip title="Categories" placement="right">
                <CategoriesSwitch
                  onClick={handlecategories}
                  active={expandCategories}
                  view={togglemenu}
                >
                  {togglemenu && <MenuListIcons src={categoriesicon} />}
                  <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png" />
                  <MenuTextBlock>
                    {togglemenu && <MenuName>Categories</MenuName>}
                  </MenuTextBlock>
                </CategoriesSwitch>
              </Tooltip>
              <BlockArea view={expandCategories}>
                <StylishMenuItems
                  linkpath="/category/social"
                  linkname="Social"
                  linkbadge={978}
                  active={["#1a73e8", "#e8f0fe"]}
                  hasparent={"yes"}
                  logo="https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png"
                  alternatelogo="https://www.gstatic.com/images/icons/material/system_gm/1x/people_outline_black_20dp.png"
                />
                <StylishMenuItems
                  linkpath="/category/updates"
                  linkname="Updates"
                  linkbadge={1321}
                  active={["#e37400", "#feefe3"]}
                  hasparent={"yes"}
                  logo="https://www.gstatic.com/images/icons/material/system/1x/info_gm_yellow900_20dp.png"
                  alternatelogo="https://www.gstatic.com/images/icons/material/system_gm/1x/info_outline_black_20dp.png"
                />
                <StylishMenuItems
                  linkpath="/category/forums"
                  linkname="Forums"
                  linkbadge={1}
                  active={["#a142f4", "#f3e8fd"]}
                  hasparent={"yes"}
                  logo="https://www.gstatic.com/images/icons/material/system/1x/forum_gm_purple500_20dp.png"
                  alternatelogo="https://www.gstatic.com/images/icons/material/system_gm/1x/forum_black_20dp.png"
                />
                <StylishMenuItems
                  linkpath="/category/promotions"
                  linkname="Promotions"
                  linkbadge={1}
                  active={["#188038", "#e6f4ea"]}
                  hasparent={"yes"}
                  logo="https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png"
                  alternatelogo="https://www.gstatic.com/images/icons/material/system_gm/1x/local_offer_black_20dp.png"
                />
              </BlockArea>
              <MenuItems
                linkpath="/settings/labels"
                linkname="Manage labels"
                logo="https://www.gstatic.com/images/icons/material/system_gm/1x/settings_black_20dp.png"
              />
              <ExpandSwitch view={togglemenu}>
                <MenuListIcons src="https://www.gstatic.com/images/icons/material/system_gm/1x/add_black_20dp.png" />
                <MenuTextBlock>
                  <MenuName>Create new label</MenuName>
                </MenuTextBlock>
              </ExpandSwitch>
            </BlockArea>
          </BlockArea>
        </AllMenu>
      </MenuArea>
    </>
  );
};

export default MenuBlock;
