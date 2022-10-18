import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import githubIcon from "../../assets/icons/github.png";
import ChildNav from "react-bootstrap/Nav";
import "../navbar/style.scss";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          className="navbar-brand nav-link"
          onClick={() => navigate("/")}
        >
          <div className="main-info">
            <div className="icon">
              <img alt="icon" src={githubIcon} width="30" height="30" />
            </div>
            <div className="title">Github GIST Application</div>
          </div>
        </Navbar.Brand>

        <ChildNav className="me-auto">
          <ChildNav.Link
            className="nav-link"
            onClick={() => navigate("/get-all-gist")}
          >
            All Public GIST
          </ChildNav.Link>
        </ChildNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
