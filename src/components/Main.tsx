import React, { useState, useEffect } from "react";
import styles from "../css/Main.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Main() {
  const [sideRight, setSideRight] = useState(false);
  return (
    <div className={cx("entire")}>
      <div className={cx("main")}>
        This is Main Page. This is Main Page. This is Main Page. This is Main
        Page. This is Main Page. This is Main Page. This is Main Page. This is
        Main Page. This is Main Page. This is Main Page. This is Main Page.{" "}
        <div
          onClick={() => {
            setSideRight(!sideRight);
          }}
        >
          turn sideRight on/off
        </div>
      </div>
      {sideRight && <div className={cx("sideRight")}>this is sideRight</div>}
    </div>
  );
}

export default Main;
