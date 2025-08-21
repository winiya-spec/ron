import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel_m() {
  return (
    <Carousel
      interval={10000}
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "100px",
      }}
    >
      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          disablePictureInPicture
          style={{ objectFit: "cover", maxHeight: "500px", width: "100%" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video7.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>Robert Mapplethorpe</h3>
          <h3>curated by Edward Enninful</h3>
          <p>2 March—6 September 2025</p>
          <p>Paris Marais</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="d-block w-100"
          style={{ objectFit: "cover", maxHeight: "500px", width: "100%" }}
        >
          <source src={process.env.PUBLIC_URL + "/videos/video6.mp4"} type="video/mp4" />
        </video>
        <Carousel.Caption className="centered">
          <h3>Re-enchantment </h3>
          <p>17 February—11 July 2025</p>
          <p>Paris Pantint</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_m;
