import React from "react";
import { Divider } from "@mui/material";
import { DataToolbarArea, InboxBlock } from "../../../Styled/Styles/Div.styled";
import TabControll from "./TabControll";
import Toolbox from "../../Reusable/Toolbar";

const Inbox = () => {
  return (
    <>
      <InboxBlock>
        <DataToolbarArea>
          <Toolbox />
        </DataToolbarArea>
        <Divider sx={{ backgroundColor: "#f1f3f4", opacity: ".5" }} />
        <TabControll />
      </InboxBlock>
    </>
  );
};

export default Inbox;
