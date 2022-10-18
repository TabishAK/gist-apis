import React from "react";
import Table from "react-bootstrap/Table";
import "./style.scss";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BootsrapTable = ({ data, pageNo, setPageNo, username }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>User Avatar</th>
            <th>Github Url</th>
            <th>Badge/Tag</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((gists) => {
            const badges = [];
            for (let [key] of Object.entries(gists?.files)) {
              const extension = key.split(".");
              if (extension[1]) badges.push(extension[1]);
              else badges.push("txt");
            }
            return (
              <tr key={gists?.id}>
                <td>{gists?.id}</td>
                <td>{gists?.owner?.login}</td>
                <td className="">
                  <img src={gists?.owner?.avatar_url} alt="avatar" />
                </td>
                <td>{gists?.owner?.html_url}</td>
                <td
                  style={{
                    wordBreak: "break-word",
                    cursor: "pointer",
                  }}
                >
                  [{" "}
                  {badges.map((badge, i) => {
                    return badge + (badges.length - 1 === i ? "" : ",");
                  })}{" "}
                  ]
                </td>

                <td>
                  <Link to={`/gist/${gists?.id}`}>See details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {data?.length === 0 ? (
        <h6>Unable to find the data</h6>
      ) : username?.trim()?.length === 0 ? (
        <h6>Search username to get the results</h6>
      ) : (
        ""
      )}

      <div className="arrow mt-5 mb-5">
        <div className="left-arrow">
          <BsArrowBarLeft
            onClick={() => {
              if (pageNo > 1) {
                setPageNo(pageNo - 1);
              }
            }}
          />
        </div>
        <div className="right-arrow">
          <BsArrowBarRight onClick={() => setPageNo(pageNo + 1)} />
        </div>
      </div>
    </>
  );
};

export default BootsrapTable;
