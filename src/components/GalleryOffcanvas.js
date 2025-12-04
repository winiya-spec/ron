import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GalleryOffcanvas = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();  // useNavigate 훅을 사용하여 navigate 함수 얻기

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: "#333333",
          color: "white",
          border: "1px solid #fff",
          padding: "5px 15PX",
          fontSize: "14px", 
        }}
      >
        갤러리소개
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ backgroundColor: "#bdc9c5ff", color: "#fff" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              fontsize: "25px",
              fontWeight: "bold",
              padding: "40px",
              marginTop: "50px",
              marginBottom: "-30px",
              textAlign: "center",
            }}
          >
            About 'Thaddaeus Ropac'
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body
          style={{ fontsize: "14px", padding: "50px", textAlign: "left" }}
        >
          <h5
            style={{
              fontsize: "23px",
              textAlign: "center",
              marginLeft: "-20px",
            }}
          >
            Galerie Thaddaeus Ropac
          </h5>
          <p>
            <strong>Contemporary Art. Timeless Vision.</strong>
            <br />
            <br />
            <strong>타데우스 로팍 갤러리</strong>는 1981년 설립된 세계적인
            현대미술 갤러리입니다.
            <br />
            잘츠부르크, 파리, 런던에 공간을 운영하며 앤디 워홀, 바스키아, 알렉스
            카츠, 키퍼 등 거장 작가들의 작품을 소개해 왔습니다.
            <br />
            <br />
            Founded in 1981, Galerie Thaddaeus Ropac has become a global
            platform for major contemporary artists like Warhol, Basquiat, Katz,
            and Kiefer. With locations in Salzburg, Paris, and London, the
            gallery continues to shape the art world
            <br />
            with visionary exhibitions and monumental works.
          </p>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <img
              src={process.env.PUBLIC_URL + "/img/artwork11.jpg"}
              alt="Galerie Thaddaeus Ropac"
              style={{ maxWidth: "100%", height: "auto", marginTop: "30px" }}
            />
          </div>

          {/* 작품 보러가기 버튼 */}
          <Button
            style={{
              backgroundColor: "#6e6e6eff",
              color: "white",
              border: "none",
              marginTop: "40px",
              marginBottom: "20px",
              padding: "5px 20px",
              margin: "15px 60px",
              fontsize: "12px",
            }}
            onClick={() => navigate("/product")}  // 버튼 클릭 시 "/detail" 페이지로 이동
          >
            작품 보러가기
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default GalleryOffcanvas;
