import NavBar from "./components/Navbar";
import { Box } from "@mui/material";
import Merchants from "./components/Merchants";
import Consumer from "./components/Consumer";
import { Routes, Route, Navigate } from "react-router";
import MerchantDetail from "./components/Merchant-Detail";
import ConsumerDetail from "./components/Consumer-Detail";

function App() {
  return (
    <>
      <Box component="header">
        <NavBar />
      </Box>
      <Box component="main" sx={{ mt: "10vh" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/merchants" />} />
          <Route path="/merchants" element={<Merchants />} />
          <Route path="/consumers" element={<Consumer />} />
          <Route path="/consumer-detail" element={<ConsumerDetail />} />
          <Route path="/merchant-detail" element={<MerchantDetail />} />
          <Route path="*" element={<Navigate to="/merchants" />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
