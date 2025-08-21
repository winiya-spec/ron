import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledExample() {
  return (
    <Carousel interval={10000}>
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          disablePictureInPicture
          style={{ objectFit: "cover", height: "100vh" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video3.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>
            Georg Baselitz<br />
            Ein Bein von Manet aus Paris
          </h3>
          <p>26 April—26 July 2025 Paris Pantin</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          style={{ objectFit: "cover", height: "100vh" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video2.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>
            Ron Mueck<br />
            En Garde
          </h3>
          <p>Until 2 April 2025 Ely House, London.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          style={{ objectFit: "cover", height: "100vh" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video1.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>
            Hans Josephsohn<br />
            Sculptures 1969—1998
          </h3>
          <p>
            Until 1 March 2025<br />
            Via Brattas 2, 7500 St. Moritz, Switzerland.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          style={{ objectFit: "cover", height: "100vh" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video5.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>
            David Salle<br />
            Some Versions of Pastoral
          </h3>
          <p>
            Until 8 June 2025<br />
            Ely House, London
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
