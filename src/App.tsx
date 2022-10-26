import React from "react";
import "./App.css";
import { GithubCommits } from "./components/GithubCommits/GithubCommits";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GithubCommits />
      </header>
    </div>
  );
}

export default App;
