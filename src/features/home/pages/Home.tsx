import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/songs">
            <Button color="primary">View Songs</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
