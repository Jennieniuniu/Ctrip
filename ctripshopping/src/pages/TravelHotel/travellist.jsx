import React from "react";
import Usernavigation from "../../components/usernavigation";
import Ctripfooter from "../../components/ctripfooter";
import Sideselect from "../../components/sideselect";
import Ticket from "../../components/ticket";

// ===============================选择月份或主题对应的门票展示================================
export default function Travellist() {
  return (
    <>
      <Usernavigation />
      <Sideselect />
      {/* 门票 */}
      <Ticket />
      <Ctripfooter />
    </>
  );
}
