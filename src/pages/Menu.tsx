import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Menu = () => {
  return (
    <div>
      <Header />
      <div className="menu-container">
        <h1>Menu</h1>
        <ul>
          <li>
            <a href="/menu/1">Menu Item 1</a>
          </li>
          <li>
            <a href="/menu/2">Menu Item 2</a>
          </li>
          <li>
            <a href="/menu/3">Menu Item 3</a>
          </li>
          <li>
            <a href="/menu/4">Menu Item 4</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
