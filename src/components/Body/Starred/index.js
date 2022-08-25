import { Divider } from "@mui/material";
import React from "react";
import { MailBlock, StarredBlock } from "../../../Styled/Styles/Div.styled";
import Mail from "../../Reusable/Mail";
import Toolbox from "../../Reusable/Toolbar";

const index = () => {
  return (
    <>
      <>
        <StarredBlock>
          <Toolbox />
          <Divider sx={{ backgroundColor: "#f1f3f4", opacity: ".5" }} />
          <MailBlock>
            <Mail />
            <center>
              <h1 style={{ fontFamily: "var(--popp" }}>Coming Soon........</h1>
            </center>
          </MailBlock>
        </StarredBlock>
      </>
    </>
  );
};

export default index;
