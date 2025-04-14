import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Wrapper from "wrappers/Wrapper/Wrapper";
import Home from "./views/Home/Home";
import Item from "views/Item/Item";

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/figures/:id" element={<Item />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
