import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Shop_page from "./pages/shop-page";
import MainHeader from "./components/MainHeader";
import InstaApp from "./pages/InstaApp";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
export default function App() {

  return (
    <BrowserRouter>
    <MainHeader />
    <Toaster/>
      <Routes>
        <Route path="/" element={<Shop_page />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/InstaApp" element={<InstaApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

//protected route (login - authority)