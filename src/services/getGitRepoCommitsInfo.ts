import { request } from "@octokit/request";

export const getGitCommitsHistory = async () => await request("GET /repos/anveshbathini3/git-commit-history/commits", {
  owner: "anveshbathini3",
  repo: "git-commit-history"
});