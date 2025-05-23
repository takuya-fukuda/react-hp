import "./HomeSecondSection.css";

const HomeSecondSection = () => {
  return (
    <div>
      <div className="second-section-container">
        <div className="greeting-container">
          <h1>Hair Stage Re:birthよりご挨拶</h1>
          <p>
            2023年4月、京都市伏見区醍醐にてサロン『Hair Stage
            Re:birth』としてオープンいたしました。
            <br />
            遠方のお客様にもご来店頂けるよう、駐車場も完備しております。
          </p>
          <p>
            当店では特にメンズカットやショートカット、お子様のカットを得意としております。
            <br />
            その他シェービングや育毛マッサージ等のメニューもご用意しております。
          </p>
          <p>
            また、老人ホームなどの福祉施設や個人宅への出張訪問カットを行っておりますので、お気軽にご相談ください。
            <br />
            皆様のご来店を心よりお待ちしております。
          </p>
        </div>
        <div className="salon-image-container">
          <div className="salon-box1">
            <img
              src="/shop_img1.jpg"
              alt="ShotImage1"
              className="salon-image"
            />
          </div>
          <div className="salon-box2">
            <img
              src="/shop_img2.jpg"
              alt="ShotImage1"
              className="salon-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSection;
