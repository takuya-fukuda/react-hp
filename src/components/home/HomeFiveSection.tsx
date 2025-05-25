import "./HomeFiveSection.css";

const HomeFiveSection = () => {
  return (
    <div>
      <div className="five-section-container">
        <div className="five-section-shop-container">
          <h1>店舗案内</h1>
          <p>営業時間やアクセス方法を記載しております</p>
          <button>詳しくはこちら</button>
        </div>
        <div className="five-section-image-container">
          <img
            src="/shop_img5.jpg"
            alt="ShotImage2"
            className="five-section-shop-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFiveSection;
