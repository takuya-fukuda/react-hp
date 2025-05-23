import "./HomeFirstSection.css";

const HomeFirstSection = () => {
  return (
    <div>
      <div className="first-section-container">
        <div className="first-section-title">
          <b>NEWS</b>
          <h1>お知らせ</h1>
        </div>
        <div className="news-container">
          <ul>
            <li>
              <p className="new-info">新着情報</p>
              <p>2025/05/01 | 5月の定休日のご案内</p>
            </li>
            <li>
              <p className="new-info">新着情報</p>
              <p>2025/05/01 | 縮毛矯正メニュー</p>
            </li>
            <li>
              <p className="new-info">新着情報</p>
              <p>2025/05/01 | 訪問出張カットのご案内</p>
            </li>
            <li className="li-last">
              <p className="new-info">新着情報</p>
              <p>2025/05/01 | お知らせ</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSection;
