import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet, useNavigate } from "react-router";
import "./AppLayout.style.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    const trimKeyword = keyword.trim();
    if (!trimKeyword) {
      // // 3. 키워드가 비어있으면 (또는 공백만 있으면) 검색을 수행하지 않습니다.
      // // 사용자에게 알림을 주거나, 함수 실행을 중단합니다.
      // alert("검색어를 입력해주세요.");
      navigate(`/movies`);
      setKeyword("");
      alert("검색어를 입력해주세요.");
      return;
    }

    //위에 url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");

    return; // 함수 실행을 여기서 중단합니다.
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Nav.Link as={Link} to="/ ">
            <img
              width={100}
              as={Link}
              to="/ "
              src="https://wallpapers.com/images/hd/netflix-logo-red-background-rbt3azw93fwahji6.png"
              alt="logo"
            />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/ ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Movies">
                Movie
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                className="me-2 custom-gray-control"
                aria-label="Search"
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
