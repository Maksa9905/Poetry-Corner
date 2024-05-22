import "./App.css";
import Header from "./Layouts/Header";
import MainPage from "./Layouts/Pages/MainPage";
import PoemPage from "./Layouts/Pages/PoemPage";
import NotFound from "./Layouts/Pages/NotFound";
import Footer from "./Layouts/Footer";
import { posts } from "./data/posts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/posts">
            <Route path=":id" element={<PoemPage></PoemPage>}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
