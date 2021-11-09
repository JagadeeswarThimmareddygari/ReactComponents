import React from "react";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
