import "./HomeFourthSection.css";

const HomeFourthSection = () => {
  return (
    <div>
      <div className="fourth-section-container">
        <div className="fourth-section-image-container">
          <img
            src="/shop_img4.jpg"
            alt="ShotImage1"
            className="fourth-section-staff-image"
          />
        </div>
        <div className="fourth-section-staff-container">
          <h1>スタッフ紹介</h1>
          <p>当店スタッフのプロフィールを掲載しております。</p>
          <button>詳しくはこちら</button>
        </div>
      </div>
    </div>
  );
};

export default HomeFourthSection;
