import "./HomeSixSection.css";

const HomeSixSection = () => {
  return (
    <div>
      <div className="six-section-container">
        <div className="six-section-description-container">
          <h1>ご予約・お問い合わせ</h1>
          <p>
            ご予約・お問い合わせは、下記よりご連絡ください。
            <br />
            皆様のご来店を心よりお待ちしております。
          </p>
        </div>
        <div className="six-section-reserve-container">
          <button>
            ご予約はこちら
            <br />
            ホットペッパービューティーのご予約ページが開きます
          </button>
        </div>
        <div className="six-section-contact-container">
          <button>
            メールでのお問い合わせ
            <br />
            24時間365日受付中
          </button>
          <button className="six-section-phone-button">
            075-585-3950
            <br />
            平日9:30～19:00/土日祝9:00～19:00(定休日：月曜日、火曜日)
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSixSection;
