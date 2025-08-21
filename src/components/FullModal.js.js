import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel_m from "./Carousel_m";

function FullModal() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <div>
        {values.map((v, idx) => (
          <Button
            key={idx}
            variant="primary"
            onClick={handleShow}
            style={{
              backgroundColor: "#333333",
              color: "white",
              border: "1px solid #fff",
              padding: "5px 15px",
              fontSize: "14px",
            }}
          >
            전시회 소식
          </Button>
        ))}
      </div>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "50px",
              fontWeight: "bold",
            }}
          >
            전시회 소식
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginBottom: "100px" }}>
          <h5
            style={{
              fontSize: "23px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            Latest from the Gallery
          </h5>

          <Carousel_m />

          <h3
            style={{
              fontSize: "22px",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Current & Upcoming Exhibitions
          </h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* 박스 1 */}
            <div
              className="card-box_modal"
              style={{
                width: "420px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                height: "750px",
                overflow: "hidden",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/news4.jpg"}
                alt="Exhibition 1"
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Featured in artpress
                </p>
                <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>
                  Robert Longo: 'Mirrors with a Memory' | Interview on the
                  occasion of his exhibition at the Louisiana Museum
                </h4>
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "#555",
                    marginBottom: "auto",
                  }}
                >
                  Guillaume Oranger questions Robert Longo about sources,
                  abstraction, politics and memory.
                </p>
                <div style={{ textAlign: "center", marginTop: "auto" }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    style={{
                      backgroundColor: "#a1b8b0ff",
                      border: "none",
                      fontSize: "13px",
                      padding: "6px 20px",
                    }}
                  >
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>

            {/* 박스 2 */}
            <div
              className="card-box_modal"
              style={{
                width: "420px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                height: "750px",
                overflow: "hidden",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/news-2.jpg"}
                alt="Exhibition 2"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Featured in Frankfurter Allgemeine Zeitung 12 July 2025
                </p>
                <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>
                  Georg Baselitz: From his dialogue with time
                </h4>
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "#555",
                    marginBottom: "auto",
                  }}
                >
                  The FAZ writes: 'The dance of the lines around the bodies, but
                  also through them, gives rise to conflicting emotions.'
                </p>
                <div style={{ textAlign: "center", marginTop: "auto" }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    style={{
                      backgroundColor: "#a1b8b0ff",
                      border: "none",
                      fontSize: "13px",
                      padding: "6px 20px",
                    }}
                  >
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>

            {/* 박스 3 */}
            <div
              className="card-box_modal"
              style={{
                width: "420px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                height: "750px",
                overflow: "hidden",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/news3.jpg"}
                alt="Exhibition 3"
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "#777",
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Museum Exhibitions START, Shanghai, China 29 June 2025
                </p>
                <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>
                  Richard Deacon & Anselm Kiefer on view at the START Museum |
                  They are part of the group exhibition 'I / witness /
                  gold-paved / Shanghai'
                </h4>
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "#555",
                    marginBottom: "auto",
                  }}
                >
                  The exhibition is the fourth and final installment of the
                  museum’s inaugural exhibition series.
                </p>
                <div style={{ textAlign: "center", marginTop: "auto" }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    style={{
                      backgroundColor: "#a1b8b0ff",
                      border: "none",
                      fontSize: "13px",
                      padding: "6px 20px",
                    }}
                  >
                    자세히 보기
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#555",
              marginBottom: "auto",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            다가오는 전시회에서 예술의 새로운 경계를 경험하세요. 세계적인
            작품들과 만나보세요.
          </p>

          <p
            style={{
              fontStyle: "italic",
              fontSize: "13px",
              color: "#555",
              marginBottom: "auto",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            “Experience the new horizons of art at the upcoming exhibition.
            Don’t miss this exclusive moment featuring world-renowned
            masterpieces.”
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FullModal;
