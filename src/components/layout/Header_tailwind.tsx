import { useState } from "react";
import { Link } from "react-router-dom";

const Header_tailwind = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <header className="flex bg-[#ffffff]">
        <div className="flex justify-center items-center lg:w-full">
          <img src="/head_logo.png" alt="logo Slider" className="w-[80%] " />
        </div>
        <div className="hidden lg:flex mt-0 mr-0 mb-0 ml-auto ">
          {/* 以下は本当はmapで回した方がいい */}
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            <Link to="/">ホーム</Link>
          </li>
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            <Link to="/menu">メニュー</Link>
          </li>
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            <Link to="/information">店舗案内</Link>
          </li>
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            <Link to="/staff">スタッフ紹介</Link>
          </li>
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            <Link to="/news">お知らせ</Link>
          </li>
          <li className="flex justify-center items-center w-[150px] bg-[#ffffff] hover:cursor-pointer hover:underline hover:decoration-[#a8a6a6]">
            ご予約はこちら
          </li>
        </div>
      </header>
      <div className="lg:hidden">
        <button className="bg-black text-white" onClick={() => setOpen(!open)}>
          三
        </button>
        メニュー
      </div>
      <div
        className="hamnurger-menu"
        style={{ display: open ? "none" : "block" }}
      >
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          <Link to="/">ホーム</Link>
        </li>
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          <Link to="/menu">メニュー</Link>
        </li>
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          <Link to="/information">店舗案内</Link>
        </li>
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          <Link to="/staff">スタッフ紹介</Link>
        </li>
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          <Link to="/news">お知らせ</Link>
        </li>
        <li className="list-none flex justify-center items-center w-full bg-black text-white border border-gray-300">
          ご予約はこちら
        </li>
      </div>
    </div>
  );
};

export default Header_tailwind;
