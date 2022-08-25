import React from "react";
import Head from "./components/Header";
import Menu from "./components/Body/Menu";
import { Route, Routes, Navigate } from "react-router-dom";
import Inbox from "./components/Body/Inbox";
import { BodyArea } from "./Styled/Styles/Div.styled";
import AddOns from "./components/Body/AddOns";
import Starred from "./components/Body/Starred";
import Snoozed from "./components/Body/Snoozed";
import Sent from "./components/Body/Sent";
import Drafts from "./components/Body/Drafts";
import Importants from "./components/Body/Important";
import Chats from "./components/Body/Chats";
import Scheduled from "./components/Body/Scheduled";
import AllMail from "./components/Body/AllMail";
import Spam from "./components/Body/Spam";
import Trash from "./components/Body/Trash";
import Social from "./components/Body/Social";
import Updates from "./components/Body/Updates";
import Forums from "./components/Body/Forums";
import Promotions from "./components/Body/Promotions";

const App = () => {
  return (
    <>
      <Head />
      <BodyArea>
        <Menu />
        <Routes>
          <Route end path="/" element={<Navigate to="/inbox" />} />
          <Route end path="/inbox" element={<Inbox />} />
          <Route end path="/starred" element={<Starred />} />
          <Route end path="/snozzed" element={<Snoozed />} />
          <Route end path="/sent" element={<Sent />} />
          <Route end path="/drafts" element={<Drafts />} />
          <Route end path="/important" element={<Importants />} />
          <Route end path="/chats" element={<Chats />} />
          <Route end path="/scheduled" element={<Scheduled />} />
          <Route end path="/all" element={<AllMail />} />
          <Route end path="/spam" element={<Spam />} />
          <Route end path="/trash" element={<Trash />} />
          <Route end path="/category/">
            <Route end path="/category/social" element={<Social />} />
            <Route end path="/category/updates" element={<Updates />} />
            <Route end path="/category/forums" element={<Forums />} />
            <Route end path="/category/promotions" element={<Promotions />} />
          </Route>
          <Route end path="/settings/" element={null}>
            <Route end path="/settings/labels" element={null} />
          </Route>
          <Route to="*" element={<Navigate to="/inbox" />} />
        </Routes>
        <AddOns />
      </BodyArea>
    </>
  );
};

export default App;
