import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Wrapper from "wrappers/Wrapper/Wrapper";
import Home from "./views/Home/Home";
import Item from "views/Item/Item";
import FiguresList from "views/FiguresList/FiguresList";
import Contact from "views/Contact/Contact";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/figures" element={<FiguresList />} />
          <Route path="/figures/:id" element={<Item />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
