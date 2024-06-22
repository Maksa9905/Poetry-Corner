import "./App.css";
import Header from "./Layouts/Header";
import MainPage from "./Layouts/Pages/MainPage/MainPage";
import PostPage from "./Layouts/Pages/PostsPage/PostPage";
import PostsPage from "./Layouts/Pages/PostsPage/PostsPage";
import NotFound from "./Layouts/Pages/NotFound";
import Footer from "./Layouts/Footer";
import { Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";
import { SearchQueryContext } from "./Context/searchQueryContext";
import NewsPage from "./Layouts/Pages/NewsPage/NewsPage";
import AuthorsPage from "./Layouts/Pages/AuthorsPage/AuthorsPage";
import AuthorPage from "./Layouts/Pages/AuthorsPage/AuthorPage/AuthorPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
        <div className="wrapper">
          <Header></Header>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/posts">
              <Route index element={<PostsPage></PostsPage>}></Route>
              <Route path=":id" element={<PostPage></PostPage>}></Route>
            </Route>
            <Route path="/news">
              <Route index element={<NewsPage></NewsPage>}></Route>
            </Route>
            <Route path="/authors">
              <Route index element={<AuthorsPage />}></Route>
              <Route path=":id" element={<AuthorPage />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </SearchQueryContext.Provider>
    </>
  );
}

export default App;
