import { useEffect, useState } from "react";
import { ICommitInfo } from "../../interfaces/ICommitInfo";
import { IGitCommits } from "../../interfaces/IGitCommits";
import { getGitRepoCommitsInfo } from "../../services/getGitRepoCommitsInfo";
import { Card } from "../Card/Card";
import "./GitCommits.css";

const getCommitsInfo = (commitsData: IGitCommits[]): ICommitInfo[] => {
  const commitsInfo: ICommitInfo[] = [];
  commitsData.map((item: IGitCommits) => {
    commitsInfo.push({
      message: item.commit.message,
      userName: item.commit.committer.name,
      date: item.commit.committer.date,
      id: item.sha,
    });
  });
  return commitsInfo;
};

export const GithubCommits = () => {
  const [commits, setCommits] = useState<ICommitInfo[]>([]);

  useEffect(() => {
    getGitCommitComments();
  }, []);

  const getGitCommitComments = (): void => {
    getGitRepoCommitsInfo().then((response) => {
    const commitsInfo = getCommitsInfo(response.data);
    if (response.data.length !== commits.length) {
        setCommits(commitsInfo);
      }
    });
  };


  return (
    <div className="card-section">
      {commits.map((commit: ICommitInfo) => {
        return <Card key={commit.id} {...commit} />;
      })}
    </div>
  );
};
