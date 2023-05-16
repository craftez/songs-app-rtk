import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/home/pages/Home";
import Songs from "./features/songs/pages/Songs";
import Song from "./features/songs/pages/Song";
import NotFound from "./features/home/pages/NotFound";
function App() {
  return (
    <Router>
      <Navbar container="lg">
        <NavbarBrand href="/">SongsApp</NavbarBrand>
        <NavbarText>Sample App</NavbarText>
      </Navbar>
      <Routes>
        <Route index Component={Home} />
        <Route path="songs/:id" Component={Song} />
        <Route path="songs" Component={Songs} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
