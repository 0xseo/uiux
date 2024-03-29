import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styles from "../css/Header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  const [searchVal, setSearchVal] = useState("");
  const [filterModal, setFilterModal] = useState(false);
  return (
    <div className={cx("entire")}>
      <div className={cx("header")}>
        <div className={cx("logo")}>logo</div>
        <div className={cx("searchArea")}>searchArea</div>
        <div className={cx("buttonArea")}>
          <div className={cx("button")}>?</div>
          <div className={cx("button")}>setting</div>
          <div className={cx("button")}>menu</div>
          <div className={cx("button")}>profile</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
