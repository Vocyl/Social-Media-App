import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route index path="/login" element={<LoginPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
