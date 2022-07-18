import React from "react";
import { VscIssues } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";

function Repo({ name, desc, stars, issues, createdAt, owner }) {
  const RepoContainer = "p-3 border-b border-gray-300 mb-8";
  const RepoInfoType =
    "flex flex-row items-center bg-gray-200 rounded-lg text-gray-500 text-sm px-2 py-1";

  const RepoName = "md:text-xl font-semibold";
  const RepoDesc = "text-sm text-stone-500 mt-4";
  const RepoHistory = "text-xs font-medium";

  return (
    <div className={RepoContainer}>
      <h2 className={RepoName}>{name}</h2>
      <p className={RepoDesc}>{desc}</p>

      <div className="flex flex-row items-center mt-8 space-x-3">
        <div className={RepoInfoType}>
          <AiOutlineStar />
          <p>Stars: {stars}</p>
        </div>

        <div className={RepoInfoType}>
          <VscIssues />
          <p>issues: {issues}</p>
        </div>

        <p className={RepoHistory}>
          Submitted by {owner} on {new Date(createdAt).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default Repo;
