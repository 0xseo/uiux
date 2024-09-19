import React, { useState, useEffect } from "react";
import styles from "../css/Main.module.css";
import classNames from "classnames/bind";

import {
  IoMdInformationCircleOutline,
  IoMdArrowDropdown,
  IoMdCheckmark,
} from "react-icons/io";
import { PiSquaresFourBold, PiListBold } from "react-icons/pi";

const cx = classNames.bind(styles);

const Filter = (
  label: string,
  modal: any,
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (
    <div
      className={cx("center", "label", "btn")}
      style={{
        fontSize: 14,
        border: "1px solid black",
        borderRadius: 8,
        padding: "5px 10px",
        margin: "4px 8px 4px 4px",
      }}
    >
      {label} <IoMdArrowDropdown size={18} style={{ marginLeft: 5 }} />
    </div>
  );
};

function Main() {
  const [sideRight, setSideRight] = useState(false);
  const [headerDropDown, setHeaderDropDown] = useState(true);
  const [iconBlock, setIconBlock] = useState(false);
  return (
    <div className={cx("entire")}>
      <div className={cx("main")}>
        <div className={cx("mainHeader")}>
          <div className={cx("row", "space")}>
            <div
              className={cx("label", headerDropDown && "btn")}
              style={{ fontSize: 24 }}
            >
              {"내 드라이브"}
              <div style={{ width: 5 }} />
              {headerDropDown && <IoMdArrowDropdown size={20} />}
            </div>
            <div className={cx("row")}>
              <div className={cx("center", "row")}>
                <div
                  onClick={() => {
                    setIconBlock(false);
                  }}
                  className={cx(
                    "center",
                    "btn",
                    "row",
                    !iconBlock && "selected"
                  )}
                  style={{
                    width: 55,
                    height: 30,
                    border: "1px solid black",
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                  }}
                >
                  {!iconBlock && (
                    <IoMdCheckmark size={18} style={{ marginRight: 1 }} />
                  )}
                  <PiListBold size={18} />
                </div>
                <div
                  onClick={() => {
                    setIconBlock(true);
                  }}
                  className={cx(
                    "center",
                    "btn",
                    "row",
                    iconBlock && "selected"
                  )}
                  style={{
                    width: 55,
                    height: 30,
                    border: "1px solid black",
                    borderLeft: "none",
                    borderTopRightRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                >
                  {iconBlock && (
                    <IoMdCheckmark size={18} style={{ marginRight: 1 }} />
                  )}
                  <PiSquaresFourBold size={18} />
                </div>
              </div>
              <div
                className={cx("btn", "row")}
                style={{ padding: 10 }}
                onClick={() => {
                  setSideRight(!sideRight);
                }}
                title="세부정보 보기"
              >
                <IoMdInformationCircleOutline size={20} />
              </div>
            </div>
          </div>
          <div
            className={cx("row")}
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {Filter("유형", "modal1", false, () => {})}
            {Filter("사람", "modal2", false, () => {})}
            {Filter("수정 날짜", "modal3", false, () => {})}
          </div>
        </div>
        This is Main Page. This is Main Page. This is Main Page. This is Main
        Page. This is Main Page. This is Main Page. This is Main Page. This is
        Main Page. This is Main Page. This is Main Page. This is Main Page.{" "}
      </div>
      {sideRight && <div className={cx("sideRight")}>this is sideRight</div>}
    </div>
  );
}

export default Main;
