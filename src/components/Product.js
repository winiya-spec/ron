import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Title from "./Title";

function Product() {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <img
          src={process.env.PUBLIC_URL + "/img/art1.jpg"}
          alt="Main Visual"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      <Container
        className="mt-5"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <Title tit="갤러리 작품" subtit="The gallery's collection" />

        <Row>
          {[
            {
              src: process.env.PUBLIC_URL + "/img/artwork31.jpg",
              title: "Re-enchantment",
              text: "1차 세계대전 이후, 사회학자 막스 베버는 근대화 과정에서 세계가 점점 더 합리화되고, 신비로움과 의미를 잃어버리는 ‘탈 주술화’ 현상을 설명했습니다.『Re-enchantment』는 이와 같은 현실에 반응하는 열 명의 예술가들의 작업을 통해, 자연의 대상화와 착취, 그리고 지난 세기의 상처가 남긴 탈 신비화된 세계를 다시 매혹적으로 회복하고자 하는 예술적 시도를 조명합니다.",
            },
            {
              src: process.env.PUBLIC_URL + "/img/artwork32.jpg",
              title: "Not Vital",
              text: "스위스 작가 노트 비탈의 새로운 자화상 시리즈는 인간 형태를 미니멀하고 추상적으로 표현한 작품들로, 형상의 단순화 속에서도 인간 존재의 복잡성과 내면 세계를 깊이 있게 조명합니다. 이번 전시에는 다양한 매체로 제작된 조각 작품은 물론, 자연에서 영감을 받은 유기적 작업들과 전설적인 무용수 니진스키의 ‘마지막 점프’를 형상화한 실물 크기의 조형물, 자연의 형상을 해체하고 재조합한 콜라주 작품 등이 함께 전시됩니다.",
            },
            {
              src: process.env.PUBLIC_URL + "/img/tp_1.jpg",
              title: "Teresa Pągowska",
              text: "테레사 팡고브스카는 20세기 폴란드 미술의 대표 작가로, 여성 형상을 섬세하게 표현하고 순수 캔버스를 실험적으로 활용한 점이 특징입니다. 그녀의 작품은 기계적 모더니즘에서 벗어나 감각적이고 해방된 여성상을 보여줍니다. 이번 ‘Shadow Self’ 전시는 영국에서 열리는 그녀의 첫 개인전으로, 1960년대부터 2000년대 중반까지의 주요 작품들을 선보입니다.",
            },
            {
              src: process.env.PUBLIC_URL + "/img/tp_2.jpg",
              title: "Oliver Beer",
              text: "제17회 리옹 비엔날레(2024–25)에서 도르도뉴의 선사시대 동굴벽화를 배경으로 한 설치작으로 주목받은 영국 작가 올리버 비어가, 자신의 대표작인 ‘공명 회화’를 타데우스 로팍 파리 마레에서 처음 공개합니다. 이번 전시는 소리와 형상의 밀접한 관계를 탐구하며, 우리가 듣는 방식 속에 기하학적 형태가 어떻게 스며 있는지를 예술적으로 풀어냅니다.",
            },
            {
              src: process.env.PUBLIC_URL + "/img/artwork14.jpg",
              title: "Hans Josephsohn",
              text: "지난해 파리 시립 근대미술관에서 열린 한스 요제프 존의 프랑스 첫 회고전에 이어, 이번 전시는 1952년부터 2002년까지 약 50년에 걸친 그의 조각 세계를 조망합니다. 초창기의 섬세하고 고요한 입상과 와상 조각들은 후기의 기념비적이며 추상적인 반신상과 함께 전시되어, 시간 속에서 진화한 조형 언어의 대화를 이룹니다. 아울러, 요제프 존 특유의 내밀한 감성을 담아낸 부조 작품들도 함께 소개되어 그의 조각 세계의 깊이를 더욱 풍성하게 전달합니다.",
            },
            {
              src: process.env.PUBLIC_URL + "/img/artwork16.jpg",
              title: "Irving Penn",
              text: "어빙 펜의 작품은 단순한 아름다움을 넘어, 섬세한 유머와 예리한 통찰력을 품고 있습니다. ‘Bee on Lips’의 생생한 근접 촬영은 시각적 언어의 기발한 유희를, ‘Mascara Wars’는 강렬한 대비 속에 숨겨진 긴장감을 담아냅니다. 그의 사진은 패션과 예술의 경계를 넘나들며, 순간을 멈추게 하는 힘으로 관객의 시선을 단숨에 사로잡습니다. 한층 깊어진 아름다움과 어둠이 공존하는 이 작품들은 오랜 시간 기억 속에 머무르며, 매번 새로운 의미를 되새기게 합니다.",
            },
          ].map((item, idx) => (
            <Col md={6} key={idx} style={{ marginTop: "100px" }}>
              <Card data-aos="fade-up">
                <Card.Img
                  variant="top"
                  src={item.src}
                  alt={item.title}
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>{item.title}</Card.Title>
                  <Card.Text style={{ padding: "20px", textAlign: "left" }}>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Product;
