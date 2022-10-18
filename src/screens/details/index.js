import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { octokit } from "../../utils/octokit.config";
import ReactEmbedGist from "react-embed-gist";
import { Container } from "react-bootstrap";
import Fork from "../../components/fork";

const GistDetails = () => {
  const params = useParams();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await octokit.request("GET /gists/{gist_id}", {
        gist_id: params?.id,
      });
      setResult(response.data);
    }
    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Container className="mt=5">
        <Fork forks={result?.forks?.slice(0, 3)} loading={loading} />
        <div className="mt-2">
          {params.id && (
            <ReactEmbedGist gist={`${result?.owner?.login}/${params?.id}`} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default GistDetails;
