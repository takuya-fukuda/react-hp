import "./Header.css";

const Header = () => {
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
      </header>
    </div>
  );
};

export default Header;
