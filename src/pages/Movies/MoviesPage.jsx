import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Alert from "react-bootstrap/Alert";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (isError) {
    return <Alert variant="danger"> {error.message}</Alert>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            필터
          </Col>
          <Col lg={8} xs={6}>
            <Row>
              {data?.results.length === 0 ? (
                <p>{keyword} 없습니다.</p>
              ) : (
                data?.results.map((movie, index) => (
                  <Col
                    key={index}
                    lg={3}
                    xs={6}
                  >
                    <MovieCard movie={movie} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center py-5 ">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages}
          previousLabel="< prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel=".."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </div>
  );
};

export default MoviesPage;
