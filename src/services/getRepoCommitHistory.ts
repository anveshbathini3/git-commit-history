import { request } from "@octokit/request";

export const getRepoCommitHistory = async () => await request("GET /repos/anveshbathini3/git-commit-history/commits", {
  owner: "anveshbathini3",
  repo: "github-commit-history"
});