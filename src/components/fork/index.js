import React from "react";

const Fork = ({ forks, loading }) => {
  return (
    <div>
      {loading && Array.from(new Array(3)).map((index) => <div></div>)}

      {forks?.length > 0 ? (
        <h6 className="mt-5 mb-2" style={{ textAlign: "left" }}>
          Username/avatar of the last 3 users who forked
        </h6>
      ) : (
        <h6 className="mt-5 mb-2" style={{ textAlign: "left" }}>
          No fork found!
        </h6>
      )}
      {forks?.length > 0 && (
        <div className="mt-2" style={{ display: "flex", alignItems: "center" }}>
          {forks.slice(0, 3).map((fork, index) => (
            <React.Fragment key={index}>
              <img
                style={{ width: 35, borderRadius: 50, marginRight: 8 }}
                alt={fork.user.login}
                src={fork.user.avatar_url}
              />
              <a
                href={`https://gist.github.com/${fork.id}`}
                target="_blank"
                style={{ paddingRight: "10px" }}
                rel="noreferrer"
              >
                <h5 color="textPrimary">{fork.user.login}</h5>
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fork;
