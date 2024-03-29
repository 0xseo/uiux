import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import classNames from "classnames/bind";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

const cx = classNames.bind(styles);

function App() {
  // return <div className={cx("App", { init: false })}>hello world!</div>;
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="*" element={<SideBar />}>
          <Route path="*" element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
