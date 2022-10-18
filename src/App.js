import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import PublicGist from "./screens/publicGist";
import Navbar from "./components/navbar";
import GistDetails from "./screens/details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-all-gist" element={<PublicGist />} />
        <Route path="/gist/:id" element={<GistDetails />} />
      </Routes>
    </div>
  );
}

export default App;
