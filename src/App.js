import "./App.css";
import Content from "./components/Content";
import Landing from "./components/Landing";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <Content />
    </div>
  );
}

export default App;
