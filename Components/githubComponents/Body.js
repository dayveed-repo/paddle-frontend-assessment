import React from "react";
import Repo from "./Repo";

function Body({ fetchedRepo }) {
  return (
    <div className={"flex-grow addScroll max-h-[85vh] overflow-y-scroll"}>
      <div className={"w-full max-w-2xl mx-auto"}>
        {fetchedRepo?.items.map((repo) => {
          return (
            <Repo
              name={repo.name}
              desc={repo.description}
              createdAt={repo.created_at}
              stars={repo.stargazers_count}
              issues={repo.open_issues_count}
              owner={repo.owner?.login}
              ownerAvatar={repo?.owner.avatar_url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
