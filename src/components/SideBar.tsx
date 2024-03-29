import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/SideBar.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("entire")}>
      <div className={cx("sideBar")}>sideBar</div>
      <Outlet />
      <div className={cx("sideBtnArea")}>btns</div>
    </div>
  );
}

export default SideBar;
