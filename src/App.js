import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import data from "./db/artwork";
import otherData from "./db/artwork1";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Products from "./components/Products";
import Products1 from "./components/Products1";
import Detail from "./components/Detail";
import Title from "./components/Title";
import Title1 from "./components/Title1";
import Accordion from "react-bootstrap/Accordion";
import UncontrolledExample from "./components/Carousel";
import CardComponent from "./components/CardComponent";
import GalleryOffcanvas from "./components/GalleryOffcanvas";
import Product from "./components/Product";
import ScrollDownButton from "./components/ScrollDownButton";
import BackToTop from "./components/BackToTop";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaBloggerB } from "react-icons/fa";
import FullModal from "./components/FullModal.js";
import AOS from "aos";
import "aos/dist/aos.css";
import MailInfo from "./components/MailInfo.js";
import Board from "./components/Board";

function App() {
  let [artwork] = useState(data);
  let [artwork1] = useState(otherData);

  let navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" style={{ gap: "20px", paddingRight:'80px', height:'120px'}}>
        <Container>
          <Navbar.Brand as={Link} to="/">Thaddaeus Ropac</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/"); }}>홈으로</Nav.Link>
            <Nav.Link onClick={() => { navigate("/product"); }}>제품 갤러리</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail"); }}>디자인 디테일</Nav.Link>
            <Nav.Link onClick={() => { navigate("/Board"); }}>게시판</Nav.Link>
          </Nav>
        </Container>
        <FullModal />
        <GalleryOffcanvas />
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="slider">
                <UncontrolledExample />
              </div>
              <img
                src={process.env.PUBLIC_URL + "/img/slider.jpg"}
                alt="설명"
                className="image-hover-effect"
                style={{ width: "80%", height: "700px", marginTop: "20px", objectFit: "cover" }}
              />

              <div>
                <Title1 tit1="Ron Mueck" subtit="이달의 작가소개 '론뮤익'" />
              </div>
              <AlwaysOpenExample />

              <div className="container" style={{ textAlign: "center", marginBottom: "100px" }}>
                <div className="row g-3" data-aos="fade-up">
                  <div className="col-12 col-sm-6 col-md-4 card-box">
                    <CardComponent
                      imgSrc={process.env.PUBLIC_URL + "/img/artwork1-1.jpg"}
                      title="#En Garde (2023)"
                      description="세 마리의 검은 개를 거대한 크기로 형상화한 이 작품은..."
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 card-box">
                    <CardComponent
                      imgSrc={process.env.PUBLIC_URL + "/img/artwork2-1.jpg"}
                      title="#Dark Place (2018)"
                      description="깊은 어둠 속에 떠오른 얼굴의 실루엣은..."
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 card-box">
                    <CardComponent
                      imgSrc={process.env.PUBLIC_URL + "/img/artwork3-1.jpg"}
                      title="#In Bed (2005)"
                      description="거대한 침대 위에 누운 여성의 모습은 극사실적인 디테일로..."
                    />
                  </div>
                </div>
              </div>

              <img
                src={process.env.PUBLIC_URL + "/img/art2.jpg"}
                alt="설명"
                style={{ width: "100%", height: "650px", marginTop: "20px", objectFit: "cover" }}
                data-aos="fade-up"
              />

              <Title tit="갤러리 전시" subtit="Curated works from the gallery" />
              <div className="container" style={{ textAlign: "center", marginTop: "100px" }}>
                <div className="row" data-aos="fade-up">
                  {artwork.map((ele, i) => (
                    <Products
                      artwork={{ ...ele, imgUrl: process.env.PUBLIC_URL + "/" + ele.imgUrl }}
                      i={i}
                      key={ele.id}
                    />
                  ))}
                </div>
              </div>

              <img
                src={process.env.PUBLIC_URL + "/img/ropa.jpg"}
                alt="설명"
                style={{ width: "100%", height: "300px", marginTop: "20px", objectFit: "cover" }}
                data-aos="fade-up"
              />
              <Title tit="작가 소개" subtit="Meet the Artist" />

              <div className="container" style={{ textAlign: "center", marginTop: "100px" }}>
                <div className="row" data-aos="fade-up">
                  {artwork1.map((ele, i) => (
                    <Products1
                      artwork1={{ ...ele, imgUrl: process.env.PUBLIC_URL + "/" + ele.imgUrl }}
                      i={i}
                      key={ele.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/board" element={<Board />} />
      </Routes>

      <hr style={{ marginBottom: "30px" }} />
      <MailInfo />

      <Navbar
        data-bs-theme="dark"
        className="bg-body-tertiary mt-5"
        style={{ width: "100%", padding: "20px 30px", height: "130px", backgroundColor: "#bdc9c5" }}
      >
        {/* 하단 소셜, 주소, 검색폼 코드 동일 */}
      </Navbar>

      <BackToTop />
      <ScrollDownButton />
    </div>
  );
}

export default App;

// 아래 컴포넌트들
function About() {
  return (
    <>
      <h4>회사정보</h4>
      <Outlet />
    </>
  );
}

function Member() {
  return (
    <>
      <h4>Member</h4>
    </>
  );
}

function Location() {
  return (
    <>
      <h4>Location</h4>
    </>
  );
}

function AlwaysOpenExample() {
  return (
    <Accordion className="custom-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          ‘비록 내가 표면을 다루는 데 시간을 많이 할애한다 할지라도, 실질적으로 내가 주목하고 포착하고자 하는 것은 그 내면에 깃드는 삶이다.’
        </Accordion.Header>
        <Accordion.Body>
          매우 작은 크기부터 기념비적인 스케일까지, 론 뮤엑의 세심하고 정교하게 묘사된 인물들은...
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
