import React from "react";

function DetailSection({
  imgSrc,
  reverse,
  title,
  description1,
  description2,
  description3,
}) {
  return (
    <div
      className={`row align-items-center py-5 gx-5 ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ marginTop: "150px" }}
      data-aos="fade-up"
    >
      <div className="col-md-7">
        <img
          src={imgSrc}
          alt="상품 이미지"
          className="img-fluid rounded"
          style={{ height: "850px", width: "600px", objectFit: "cover" }}
        />
      </div>
      <div className="col-md-5 text-md-start text-center mt-4 mt-md-0 ps-md-5">
        <h4>{title}</h4>
        <p className="text-muted">{description1}</p>
        <p className="text-muted1">{description2}</p>
        <p className="fw-bold">{description3}</p>
        <button
          className=""
          style={{
            border: "1px solid #ccc",
            width: "120px",
            padding: "20 40px",
            textAlign: "center",
            height: "35px",
            lineHeight: "32px",
            marginTop: "50px",
          }}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}

function Detail() {
  return (
    <div className="container" style={{ maxWidth: "1400px" }}>
      {/* 첫 번째 섹션 */}
      <DetailSection
        imgSrc={process.env.PUBLIC_URL + "/img/tsa_2.png"}
        title="Femme au Béret à la Robe Quadrillée, 2025"
        description1="Sachs credits each work to Picasso using their original dates and titles, while also adding a new 
        frame around them and his own signature in his characteristic black brushwork – additions that allow him to recontextualise 
        them and make them his own. The traces of each work’s creation, meanwhile, are left apparent, with measurement lines erased and repainted."
        description2="삭스는 원작의 제목과 연도를 회화에 명시함으로써 피카소의 작품에서 비롯되었음을 환기시킬 뿐만 아니라, 회화 주변으로 프레임을 
        추가하고 특유의 검은 획으로 서명을 남김으로써 작품을 새로운 맥락으로 비추어본다. 회화의 규격을 측정한 선이나 치수 등 작업의 흔적이 고스란히 
        남겨진 일련의 작품들은 작가의 해석이 더해진 고유한 화면이 된다."
        description3="Tom Sachs
Femme au Béret à la Robe Quadrillée, 2025
Synthetic polymer and ink on canvas
121.9 x 101.6 cm (48 x 40 in)"
      />

      <hr style={{ borderTop: "1px solid #000", margin: "80px 0" }} />

      {/* 두 번째 섹션  */}
      <DetailSection
        imgSrc={process.env.PUBLIC_URL + "/img/tsa_1.png"}
        reverse
        title="Three Musicians, 2024"
        description1="Painting is a medium Sachs has returned to several times over the years, and the paintings in this exhibition were conceptualised in 
        a period of focus on drawing and colour for the artist. Exploring the lines and forms used by Picasso, Sachs found parallels with his own practice. 
        The thick lines that recur in Sachs’s work, originating from the influence of American graffiti and street art, mimic the solid black linework that 
        delineates many of Picasso’s figures."
        description2="회화는 삭스가 수년에 걸쳐 작업해 온 매체로서 이번 전시에서 선보이는 회화들은 작가가 특히 드로잉과 색채에 집중하던 시기에 구상되었다. 
        삭스는 피카소의 회화를 연구하며 자신의 작업과 유사점을 발견했다. 삭스의 작품 전반에 걸쳐 등장하는 굵은 선은 미국 그라피티와 스트리트 아트에 뿌리를 둔 것으로, 
        피카소가 ‘어두운 시대'에 제작한 작품에서 인물의 형상을 구획하는 데 사용했던 두터운 흑선을 연상시킨다. "
        description3="Tom Sachs
Three Musicians, 2024
Synthetic polymer and Krink on canvas
226.1 x 243.8 cm (89.02 x 95.98 in)"
      />
    </div>
  );
}

export default Detail;
