import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ManageRoute } from "./route/AppRoutes";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<ManageRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
