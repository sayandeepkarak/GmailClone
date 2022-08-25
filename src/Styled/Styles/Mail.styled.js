import styled from "styled-components";
import { Checkbox } from "@mui/material";
import { SideMenuButton } from "../Mui/IconButton.styled";

export const MailStick = styled.div`
  position: relative;
  cursor: pointer;
  height: 42px;
  user-select: none;
  width: 100%;
  border-bottom: 1px solid #ebe3e38a;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  user-select: none;
  background-color: ${(props) => props.select && "#c2dbff"};
  &:before {
    display: none;
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background-image: url(https://www.gstatic.com/images/icons/material/system_gm/1x/drag_indicator_black_20dp.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px;
    opacity: 0.3;
  }
  &:hover {
    &:before {
      display: block;
    }
    & > .mail-checks-block {
      opacity: 1;
    }
    & > .mail-date-time {
      display: none;
    }
    & > .mail-hidden-menu {
      display: flex;
    }
    & > .title-text {
      padding-right: 5px;
    }
  }
`;

export const CheckBoxBlock = styled.div.attrs({
  className: "mail-checks-block",
})`
  align-items: center;
  position: relative;
  display: flex;
  opacity: 0.6;
  margin-left: 10px;
`;

export const MailChecks = styled(Checkbox).attrs({
  className: "mail-select",
  color: "default",
  sx: {
    "&::checked": {
      opacity: "0",
    },
    "&:hover": {
      img: {
        opacity: "1",
      },
    },
  },
})``;

export const StarCheck = styled(MailChecks).attrs({})`
  position: absolute;
  left: -5px;
`;
export const ImportantCheck = styled(StarCheck).attrs({})`
  left: -8px;
`;

export const SubjectBlock = styled.div`
  display: grid;
  grid-template-columns: auto;
  padding-right: 40px;
  min-width: 197px;
  @media (max-width: 700px) {
    min-width: 25%;
  }
`;

export const TitleTextBlock = styled(SubjectBlock).attrs({
  className: "title-text",
})`
  display: grid;
  grid-template-columns: auto auto;
  width: -webkit-fill-available;
  padding-right: 60px;
`;

export const MainText = styled.p`
  font-weight: ${(props) => !props.read && "bold"};
  font-family: var(--roboto);
  text-transform: capitalize;
  letter-spacing: 0.4px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.85;
  span {
    font-weight: 100;
    text-transform: initial;
  }
`;

export const DateTime = styled(MainText).attrs({
  className: "mail-date-time",
})`
  font-size: 13px;
  white-space: none;
  overflow: initial;
  text-overflow: initial;
  margin-right: 21px;
  display: block;
`;

export const HideMenuBlock = styled.div.attrs({
  className: "mail-hidden-menu",
})`
  width: auto;
  margin-right: 8px;
  display: none;
`;

export const HideButtons = styled(SideMenuButton).attrs({
  sx: {
    padding: "10px",
    "&:hover": {
      img: {
        opacity: "1",
      },
    },
  },
})``;

export const ReadCheck = styled(MailChecks).attrs({})`
  position: relative;
  left: 0;
`;
