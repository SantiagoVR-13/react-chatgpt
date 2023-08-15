import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <section className="side-bar">
          <button> + New Chat</button>
          <ul className="chat-history"></ul>
          <nav>
            <p>AI Room!</p>
          </nav>
        </section>
        <section className="main"></section>
      </>
    </div>
  );
}

export default App;
