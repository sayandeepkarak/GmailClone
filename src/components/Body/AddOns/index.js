import { Divider, Tooltip } from "@mui/material";
import React from "react";
import { AddOnesButton } from "../../../Styled/Mui/IconButton.styled";
import { AddOnesArea } from "../../../Styled/Styles/Div.styled";
import { AddOneIcons } from "../../../Styled/Styles/Img.styled";

const AddOns = () => {
  return (
    <>
      <AddOnesArea>
        <Tooltip title="Calender">
          <AddOnesButton>
            <AddOneIcons src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" />
          </AddOnesButton>
        </Tooltip>
        <Tooltip title="Google Keep">
          <AddOnesButton>
            <AddOneIcons src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" />
          </AddOnesButton>
        </Tooltip>
        <Tooltip title="Tasks">
          <AddOnesButton>
            <AddOneIcons src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" />
          </AddOnesButton>
        </Tooltip>
        <Tooltip title="Contacts">
          <AddOnesButton>
            <AddOneIcons src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png" />
          </AddOnesButton>
        </Tooltip>
        <Divider sx={{ width: "60%", alignSelf: "center" }} />
        <Tooltip title="Get Add-ons">
          <AddOnesButton>
            <AddOneIcons src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" />
          </AddOnesButton>
        </Tooltip>
      </AddOnesArea>
    </>
  );
};

export default AddOns;
