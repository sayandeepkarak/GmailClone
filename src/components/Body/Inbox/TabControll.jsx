import React, { useState } from "react";
import {
  TabButton,
  TabButtonArea,
  TabContent,
} from "../../../Styled/Styles/Tab.styled";
import { MenuListIcons } from "../../../Styled/Styles/Img.styled";
import Primary from "./Primary";
import Social from "./Social";
import Promotion from "./Promotion";

const TabControll = () => {
  const [tabstate, settabstate] = useState(1);
  const primaryimg =
    tabstate === 1
      ? "https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
      : "https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png";
  const socialimg =
    tabstate === 2
      ? "https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png"
      : "https://www.gstatic.com/images/icons/material/system_gm/1x/people_black_20dp.png";
  const promoteimg =
    tabstate === 3
      ? "https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png"
      : "https://www.gstatic.com/images/icons/material/system_gm/1x/local_offer_black_20dp.png";

  const handleClick = (index) => {
    settabstate(index);
  };

  return (
    <>
      <TabButtonArea>
        <TabButton
          activecolor="#d93025"
          className={tabstate === 1 && "active"}
          onClick={() => handleClick(1)}
        >
          <MenuListIcons src={primaryimg} />
          Primary
        </TabButton>
        <TabButton
          activecolor="#1a73e8"
          className={tabstate === 2 && "active"}
          onClick={() => handleClick(2)}
        >
          <MenuListIcons src={socialimg} />
          Social
        </TabButton>
        <TabButton
          activecolor="#188038"
          className={tabstate === 3 && "active"}
          onClick={() => handleClick(3)}
        >
          <MenuListIcons src={promoteimg} />
          Promotions
        </TabButton>
      </TabButtonArea>
      <TabContent className={tabstate === 1 && "active"}>
        <Primary />
      </TabContent>
      <TabContent className={tabstate === 2 && "active"}>
        <Social />
      </TabContent>
      <TabContent className={tabstate === 3 && "active"}>
        <Promotion />
      </TabContent>
    </>
  );
};

export default TabControll;
