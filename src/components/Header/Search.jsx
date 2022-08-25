import React from "react";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useSelector, useDispatch } from "react-redux";
import { clear, getsearch } from "../../features/searchSlice";
import Popup from "./Popup";
import { showfilter, hidefilter } from "../../features/filterSlice";
import { LargeBlock, Searchbar } from "../../Styled/Styles/Div.styled";
import { FilterButton, RoundButton } from "../../Styled/Mui/IconButton.styled";
import { TransparentInput } from "../../Styled/Styles/Input.styled";

const Search = () => {
  const searchValue = useSelector((state) => state.searchReducer.value);
  const [responsivesearchbarview, setresponsivesearchbarview] = useState(false);
  const filterform = useSelector((state) => state.filterReducer.value);
  const [showclearIcon, setclear] = useState(false);
  const [focusSearch, setfocusSearch] = useState(false);
  const dispatch = useDispatch();
  const dosearch = (e) => {
    dispatch(getsearch(e.target.value));
    setclear(true);
  };
  const clearsearch = () => {
    dispatch(clear());
    setclear(false);
    setresponsivesearchbarview(false);
  };
  const openfilter = () => dispatch(showfilter());
  const focus = () => {
    dispatch(hidefilter());
    setfocusSearch(true);
  };
  const handleresponsivesearchbar = () => {
    setresponsivesearchbarview(!responsivesearchbarview);
    responsivesearchbarview && dispatch(hidefilter());
  };
  const unfocus = () => setfocusSearch(false);
  const activesearch = focusSearch
    ? {
        filter: "drop-shadow(1px 1px 1px #999fa7)",
        backgroundColor: "white",
      }
    : null;
  return (
    <>
      <Searchbar style={activesearch} open={responsivesearchbarview}>
        <LargeBlock size="large">
          <Tooltip title="Search">
            <RoundButton onClick={handleresponsivesearchbar}>
              <SearchIcon />
            </RoundButton>
          </Tooltip>
          <TransparentInput
            onChange={dosearch}
            onClick={focus}
            onBlur={unfocus}
            open={responsivesearchbarview}
            value={searchValue}
          />
        </LargeBlock>
        <LargeBlock size="small">
          {showclearIcon && (
            <Tooltip title="Clear Search">
              <RoundButton onClick={clearsearch}>
                <ClearRoundedIcon />
              </RoundButton>
            </Tooltip>
          )}
          <Tooltip title="Show Search Options">
            <FilterButton onClick={openfilter} open={responsivesearchbarview}>
              <TuneRoundedIcon />
            </FilterButton>
          </Tooltip>
        </LargeBlock>
        {filterform && <Popup />}
      </Searchbar>
    </>
  );
};

export default Search;
