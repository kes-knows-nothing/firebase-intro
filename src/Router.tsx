import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SingIn";
import RegisterPlants from "./components/registerPlant/RegisterPlant";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registerplant" element={<RegisterPlants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
