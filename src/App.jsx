import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import OTPVerify from "./components/OTPVerify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/OTPVerify" element={<OTPVerify />} />
          {/* <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
