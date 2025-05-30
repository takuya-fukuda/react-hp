import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Information from "./pages/Information";
import Staff from "./pages/Staff";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/menu">menu</Link>
        <br />
        <Link to="/information">information</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="detailA" element={<Menu />} />
          {/* <Route path="detailB" element={<Page1DetailB />} /> */}
        </Route>
        <Route path="/information" element={<Information />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
