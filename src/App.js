import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from "./main";
import Contact from "./contact";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  )
}