import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ imgSrc, title, description }) {
  return (
    <Card style={{ width: "100%", paddingBottom: "40px", height: "100%" }}>
      <Card.Img
  variant="top"
  src={process.env.PUBLIC_URL + "/" + imgSrc} // <-- 수정
  style={{ height: "400px", objectFit: "cover" }}
/>

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Card.Title
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              padding: "30px 0 10px",
            }}
          >
            {title}
          </Card.Title>
          <Card.Text style={{ padding: "30px", textAlign: "left" }}>
            {description}
          </Card.Text>
        </div>
        <Button
          /* onClick={() => navigate('/detail')} */
          style={{
            backgroundColor: "#333333",
            color: "white",
            border: "none",
            marginTop: "30px",
            marginBottom: "20px",
            padding: "15px",
            margin: "15px 60px",
          }}
        >
          Go Detail View
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
