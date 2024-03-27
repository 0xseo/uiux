import styles from "./App.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function App() {
  return <div className={cx("App", { init: false })}>hello world!</div>;
}

export default App;
