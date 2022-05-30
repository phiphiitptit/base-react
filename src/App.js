import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ManageRoute, PublicRoute } from "./route/AppRoutes";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<ManageRoute />} />
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
