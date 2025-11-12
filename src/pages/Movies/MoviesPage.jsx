import React, { useEffect, useState, useNavigate } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Alert from "react-bootstrap/Alert";
import "./MoviePage.style.css";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  useEffect(() => {
    setPage(1);
  }, [`${keyword}`]);
 

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
          <Row className="py-5 " xs="auto" md="auto" lg="auto">
            <Col className="">
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  정렬기준
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">오래된순</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">최근순</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  장르별 검색
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">drama</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Marval</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Col lg={12} xs={12}>
            <Row>
              {data?.results.length === 0 ? (
                <p>{keyword} 찾으시는 영화가 없습니다.</p>
              ) : (
                data?.results.map((movie, index) => (
                  <Col key={index} lg={3} xs={6} className="py-3">
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
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages}
          previousLabel="< "
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
