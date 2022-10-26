import { useEffect, useState } from "react";
import { ICommitInfo } from "../../interfaces/ICommitInfo";
import { IGitCommits } from "../../interfaces/IGitCommits";
import { getRepoCommitHistory } from "../../services/getRepoCommitHistory";
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

const THIRTY_SECONDS: number = 30;

export const GitCommits = () => {
  const [commits, setCommits] = useState<ICommitInfo[]>([]);
  const [counter, setCounter] = useState(THIRTY_SECONDS);

  useEffect(() => {
    getCommitsHistory();

    const interval = setInterval(() => getCommitsHistory(), 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const countTimer = setInterval(() => countdown(), 1000);
    return () => clearInterval(countTimer || 0);
  });

  const countdown = () => {
    if (counter === 0) {
      setCounter(THIRTY_SECONDS);
    } else {
      setCounter(counter - 1);
    }
  };

  const getCommitsHistory = (): void => {
    getRepoCommitHistory().then((response) => {
      const commitsInfo = getCommitsInfo(response.data);
      if (response.data.length !== commits.length) {
        setCommits(commitsInfo);
      }
    });
  };

  const onRefreshClick = (): void => {
    getCommitsHistory();
  };

  return (
    <div className="commit-history-section">
      <div className="commit-history-header">
        <label className="commit-history-refresh-label">
          history will get refreshed in <strong>{counter}</strong> seconds
        </label>
        <button onClick={onRefreshClick} className="refresh-button">
          Refresh
        </button>
      </div>
      {commits.map((commit: ICommitInfo) => {
        return <Card key={commit.id} {...commit} />;
      })}
    </div>
  );
};
