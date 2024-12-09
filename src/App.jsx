import { useState } from "react";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/SideBarPages/Dashboard";
import AdminPage from "./components/AdminPage";
import SearchPage from "./components/SideBarPages/SearchPage";
import InsightPage from "./components/SideBarPages/InsightPage";
import Document from "./components/SideBarPages/Document";
import Setting from "./components/SideBarPages/Setting";
import Message from "./components/SideBarPages/Message";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        <div className=" flex-1 pt-[65px]">
          <SideBar />
          <div className="ms-[215px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/insights" element={<InsightPage />} />
              <Route path="/documents" element={<Document />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/messages" element={<Message />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
