import { useState } from "react";
import "./styles.css";
import { Route, Routes } from " react-router";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </ul>
        </nav>
      </header>
    </>
  );
}
