import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function MailInfo() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          "갤러리 작가들의 최신 소식을 받아보실 수 있습니다."
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          style={{
            backgroundColor: "#bdc9c5ff",
            color: "#fff",
            width: "350px",
            textAlign: "center",
            margin: "0 auto",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{
          backgroundColor: "transparent",
          color: "#000",
          border: "1px solid #ccc",
          width: "70px",
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default MailInfo;
