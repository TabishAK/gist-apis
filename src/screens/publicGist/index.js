import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BootsrapTable from "../../components/table";
import "./style.scss";
import Loader from "../../components/loader";
import { octokit } from "../../utils/octokit.config";

const PublicGist = () => {
  const [result, setResult] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    async function fetchData() {
      const response = await octokit.request("GET /gists/public", {
        per_page: 50,
        page: pageNo,
      });
      setResult(response);

      response.data.map((r) => {
        if (r?.forks?.forks) {
          console.log(r?.forks?.forks);
        }
      });

      setLoader(false);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  return (
    <div className="public-gist">
      <h2 className="mt-5 mb-5">All Public GIST</h2>

      {loader ? (
        <Loader />
      ) : (
        <Container>
          <BootsrapTable
            data={result?.data}
            pageNo={pageNo}
            setPageNo={setPageNo}
          />
        </Container>
      )}
    </div>
  );
};

export default PublicGist;
