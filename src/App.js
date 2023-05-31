import React from "react";
import Aside from "./components/aside/Aside";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <main className="main-grid">
        <Skills />
        <Aside />
      </main>
    </div>
  );
}

export default App;
