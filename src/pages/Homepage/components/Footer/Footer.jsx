import React from "react";
import "./Footer.style.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
   <Container className="footer d-flex align-items-center justify-content-center py-5 text-white">
        <Row className="text-center w-100"> {/* w-100 추가로 Row가 Container 너비를 다 쓰게 함 */}
          <Col lg={12} sm={12}>
            <div>넷플릭스 데모사이트</div>
            <div>회사소개/</div>
            <div>사업자등록번호</div>
          </Col>
        </Row>
      </Container>
      
  );
};

export default Footer;
