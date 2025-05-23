import "./HomeThirdSection.css";

const HomeThirdSection = () => {
  return (
    <div>
      <div className="third-section-container">
        <div className="third-section-title">
          <p>MENU</p>
          <h1>メニュー</h1>
        </div>
        <div className="third-section-menu-container">
          <p>
            お客様のご要望に合わせ、スタイリッシュなヘアスタイルをご提供いたします。
            <br />
            また、シェービングや育毛マッサージなどのメニューもご用意しております。
            <br />
            育毛マッサージでは、頭皮をやさしくほぐし、血行を促進することで健やかな髪へ導きます。
            <br />
            お客様には、リラックスしてくつろげる空間をご提供し、最高のヘアスタイルを手軽にご利用いただけるよう心がけております。
            <br />
            是非、一度お越しくださいませ。
            <br />
          </p>
          <div className="third-section-menu-button">
            <button className="third-menu-button">
              詳しいメニューはこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
