import "./App.css";
import { Routes, Route } from "react-router";
import AppLayout from "./Layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./pages/Homepage/components/Footer/Footer";

//홈페이지 /
//영화 전체보여주는 페이지(서치) /movies
//영화 디테일 페이지 /movies/:id
//추천영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MovieDetailPage />} />
            {/* <Route
              path="/:id/commandation"
              element={<MoviesrecommandationPage />}
            />
            <Route path="/:id/reviews" element={<MoviesreviewsPage />} /> */}
          </Route>

          {/* <Route path="/movies" element={<MoviesPAge />}></Route>
          <Route path="/movies/:id" element={<MoviesDetailPage />}></Route> */}
        </Route>
        <Route path="footer" element={<Footer />} />
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
