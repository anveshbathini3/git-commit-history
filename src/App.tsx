import React from "react";
import "./App.css";
import { GitCommits } from "./components/GithubCommits/GitCommits";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GitCommits />
      </header>
    </div>
  );
}

export default App;
