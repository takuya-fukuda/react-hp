import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/head_logo.png" alt="logo Slider" />
        </div>
        <div className="select-container">
          <li className="column">ホーム</li>
          <li className="column">メニュー</li>
          <li className="column">店舗案内</li>
          <li className="column">スタッフ紹介</li>
          <li className="column">お知らせ</li>
          <li className="column-last">ご予約はこちら</li>
        </div>
        <div className="hamburger">
          <button className="hamburger-button" onClick={() => setOpen(!open)}>
            三
          </button>
        </div>
      </header>
      <div
        className="hamnurger-menu"
        style={{ display: open ? "none" : "block" }}
      >
        <li className="bar">ホーム</li>
        <li className="bar">メニュー</li>
        <li className="bar">店舗案内</li>
        <li className="bar">スタッフ紹介</li>
        <li className="bar">お知らせ</li>
        <li className="bar">ご予約はこちら</li>
      </div>
    </div>
  );
};

export default Header;
