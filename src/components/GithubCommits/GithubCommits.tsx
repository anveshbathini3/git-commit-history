import { useEffect } from "react";
import { getGitCommitsHistory } from "../../services/getGitRepoCommitsInfo";


export const GithubCommits = () => {

  useEffect(() => {
    getGitCommitsHistory().then((response) => {
      console.log("response",response)
       });
  }, []);


  return (
    <div>
     git commit history component
    </div>
  );
};
