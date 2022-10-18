import React, { useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import BootsrapTable from "../../components/table";
import Loader from "../../components/loader";
import { octokit } from "../../utils/octokit.config";

const Home = () => {
  const [username, setUserName] = React.useState("");
  const [result, setResult] = React.useState();
  const [loader, setLoader] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);

  async function getDataByUsername(e) {
    e?.preventDefault();
    if (username.trim().length !== 0) {
      setLoader(true);

      try {
        const response = await octokit.request("GET /users/{username}/gists", {
          username: username.trim(),
          per_page: 50,
          page: pageNo,
        });
        setResult(response);

        setLoader(false);
      } catch (err) {
        setLoader(false);
      }
    }
  }

  useEffect(() => {
    getDataByUsername();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  return (
    <div className="home">
      <Container className="mt-5">
        <h5 className="mb-3">Search GIST by Username</h5>

        <form onSubmit={getDataByUsername} className="mt-5 mb-5">
          <InputGroup className="mb-3" style={{ width: "40%" }}>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              value={username}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUserName(e.target.value)}
            />

            <button
              style={{
                border: "none",
                width: "20%",
                background: "#212529",
                color: "white",
              }}
            >
              Search
            </button>
          </InputGroup>
        </form>

        {loader ? (
          <Loader />
        ) : (
          <BootsrapTable
            username={username}
            data={result?.data}
            pageNo={pageNo}
            setPageNo={setPageNo}
          />
        )}
      </Container>
    </div>
  );
};

export default Home;
