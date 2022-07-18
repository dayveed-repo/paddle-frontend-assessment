import React from "react";
import Repo from "./Repo";

function Body({ fetchedRepo }) {
  return (
    <div className={"flex-grow addScroll max-h-[85vh] overflow-y-scroll"}>
      <div className={"w-full max-w-xl mx-auto"}>
        {fetchedRepo?.items.map((repo) => {
          return (
            <Repo
              name={repo.name}
              desc={repo.description}
              createdAt={repo.created_at}
              stars={repo.stargazers_count}
              issues={repo.open_issues_count}
              owner={repo.owner?.login}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
