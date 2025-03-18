import { Nav } from "src/components/Nav";
import { HomePage } from "src/pages/HomePage";
import { DestinationPage } from "src/pages/DestinationPage";
import { CrewPage } from "src/pages/CrewPage";
import { TechnologyPage } from "src/pages/TechnologyPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export function App() {
  return (
    <div className="relative flex min-w-[375px] flex-col items-center">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/destination"
            element={<Navigate to="/destination/moon" />}
          />
          <Route
            path="/destination/:planet"
            element={<DestinationPage />}
          />
          <Route
            path="/crew"
            element={<Navigate to="/crew/commander" />}
          />
          <Route path="/crew/:position" element={<CrewPage />} />
          <Route
            path="/technology"
            element={<TechnologyPage />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
