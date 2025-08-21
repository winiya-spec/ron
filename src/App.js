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
                      imgSrc={"img/artwork1-1.jpg"}
                      title="#En Garde (2023)"
                      description="세 마리의 검은 개를 거대한 크기로 형상화한 이 작품은, 위협과 경계의 긴장감을 직관적으로 드러냅니다. 
                      단순한 자세 속에서도 감정의 밀도가 느껴지며, 사회적 불안과 통제에 대한 은유를 품고 있습니다. ‘En Garde’라는 제목처럼, 
                      마치 긴장 속 충돌 직전의 순간을 포착한 듯한 인상을 줍니다."
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 card-box">
                    <CardComponent
                      imgSrc={"img/artwork2-1.jpg"}
                      title="#Dark Place (2018)"
                      description="깊은 어둠 속에 떠오른 얼굴의 실루엣은, 말 없는 감정과 내면의 침묵을 담아냅니다. 강한 명암 대비를 통해 불안, 고독, 
                      회피의 감정을 은유하며 보는 이로 하여금 스스로의 내면을 마주하게 만듭니다. 설명 보다 감각으로 느껴지는 작품입니다."
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 card-box">
                    <CardComponent
                      imgSrc={"img/artwork3-1.jpg"}
                      title="#In Bed (2005)"
                      description="거대한 침대 위에 누운 여성의 모습은 극사실적인 디테일로 일상의 정적을 강조합니다. 그녀의 눈빛과 자세는 무언의 이야기로 감정을 전하며, 
                      누구나 공감할 수 있는 고요한 내면의 순간을 떠오르게 합니다. 익숙한 장면을 통해 인간 존재의 깊이를 다시 바라보게 만드는 작품입니다."
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
                      artwork={{ ...ele, imgUrl: ele.imgUrl }}
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
                      artwork1={{ ...ele, imgUrl: ele.imgUrl }}
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
           ‘비록 내가 표면을 다루는 데 시간을 많이 할애한다 할지라도, 실질적으로
          내가 주목하고 포착하고자 하는 것은 그 내면에 깃들은 삶이다.’
        </Accordion.Header>
        <Accordion.Body>
          매우 작은 크기부터 기념비적인 스케일까지, 론 뮤엑의 세심하고 정교하게
          묘사된 인물들은 인간의 사적인 감정의 내면세계를 반영한다. 놀라울 만큼
          사실주의적인 그의 작품들은 인류가 공유하고 있는 도전과 위험에 대한
          공감적인 경험을 바탕으로 한다. 출생과 죽음, 취약함, 두려움, 연민 같은
          보편적인 경험과 감동에 대해 내밀하고 절제된 명상을 담아내는데, 이는
          작품을 마주한 관람객으로 하여금 스스로 자신과 타인의 감정에 대해
          성찰하도록 독려한다. 작가는 자세, 몸짓, 표정, 크기, 사실주의 등 매체가
          지닌 모든 전통적인 요소를 활용함으로 인간으로서 처한 상황에 대한
          강력한 심리적 초상화를 제작한다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
