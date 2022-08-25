import React from "react";
import { FilterPopup } from "../../Styled/Mui/Paper.styled";
import { ColStack, RowStack } from "../../Styled/Mui/Stack.styled";
import { CenterBox, CenterSpaceBox } from "../../Styled/Mui/Box.styled";
import {
  ContainedButton,
  TransparentButton,
} from "../../Styled/Mui/Button.styled";
import { SimpleLabel } from "../../Styled/Mui/InputLabel.styled";
import { BottomLineInput } from "../../Styled/Styles/Input.styled";
import { DefaultCheckBox } from "../../Styled/Mui/Checkbox.styled";

const Popup = () => {
  return (
    <>
      <FilterPopup>
        <ColStack>
          <CenterSpaceBox>
            <SimpleLabel htmlFor="filter_form_from">From</SimpleLabel>
            <BottomLineInput id="filter_form_from" />
          </CenterSpaceBox>
          <CenterSpaceBox>
            <SimpleLabel htmlFor="filter_form_to">To</SimpleLabel>
            <BottomLineInput id="filter_form_to" />
          </CenterSpaceBox>
          <CenterSpaceBox>
            <SimpleLabel htmlFor="filter_form_subject">Subject</SimpleLabel>
            <BottomLineInput id="filter_form_subject" />
          </CenterSpaceBox>
          <CenterSpaceBox>
            <SimpleLabel htmlFor="filter_form_words">Has the words</SimpleLabel>
            <BottomLineInput id="filter_form_words" />
          </CenterSpaceBox>
          <CenterSpaceBox>
            <SimpleLabel htmlFor="filter_form_doesn't">
              Doesn't have
            </SimpleLabel>
            <BottomLineInput id="filter_form_doesn't" />
          </CenterSpaceBox>
          <CenterBox>
            <DefaultCheckBox id="filter_form_attach" />
            <SimpleLabel htmlFor="filter_form_attach">
              Has attachment
            </SimpleLabel>
            <DefaultCheckBox id="filter_form_chats" />
            <SimpleLabel htmlFor="filter_form_chats">
              Don't include chats
            </SimpleLabel>
          </CenterBox>
          <RowStack>
            <TransparentButton>Create filter</TransparentButton>
            <ContainedButton>Search</ContainedButton>
          </RowStack>
        </ColStack>
      </FilterPopup>
    </>
  );
};

export default Popup;
