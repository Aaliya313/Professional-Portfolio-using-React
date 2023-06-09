import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projectpage">Projects</Nav.Link>
            <Nav.Link href="/contactpage">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;