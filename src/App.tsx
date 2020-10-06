import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Spritesheet from "react-responsive-spritesheet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Spritesheet
        className={`my-element__class--style`}
        image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
        widthFrame={420}
        heightFrame={500}
        steps={14}
        fps={10}
        autoplay={true}
        loop={true}
      />
    </div>
  );
}

export default App;
