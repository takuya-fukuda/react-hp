import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/head_logo.png" alt="logo Slider" />
        </div>
        <div className="select-container">
          <li className="column">
            <Link to="/">ホーム</Link>
          </li>
          <li className="column">
            <Link to="/menu">メニュー</Link>
          </li>
          <li className="column">
            <Link to="/information">店舗案内</Link>
          </li>
          <li className="column">
            <Link to="/staff">スタッフ紹介</Link>
          </li>
          <li className="column">
            <Link to="/news">お知らせ</Link>
          </li>
          <li className="column-last">ご予約はこちら</li>
        </div>
      </header>
      <div className="hamburger">
        <button className="hamburger-button" onClick={() => setOpen(!open)}>
          三
        </button>
        メニュー
      </div>
      <div
        className="hamnurger-menu"
        style={{ display: open ? "none" : "block" }}
      >
        <li className="bar">
          <Link to="/">ホーム</Link>
        </li>
        <li className="bar">
          <Link to="/menu">メニュー</Link>
        </li>
        <li className="bar">
          <Link to="/information">店舗案内</Link>
        </li>
        <li className="bar">
          <Link to="/staff">スタッフ紹介</Link>
        </li>
        <li className="bar">
          <Link to="/news">お知らせ</Link>
        </li>
        <li className="bar">ご予約はこちら</li>
      </div>
    </div>
  );
};

export default Header;
