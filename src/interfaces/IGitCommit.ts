import { IGitCommitter } from "./IGitCommitter";

export interface IGitCommit {
    committer: IGitCommitter;
    message: string;
  }