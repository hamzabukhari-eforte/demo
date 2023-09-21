import "./App.css";
import Header from "./assets/components/header";
import { Box } from "@mui/material";
import Report from "./assets/components/pages/report";
import ReportBtn from "./assets/components/reportBtn";

const handleButtonClick = () => {
  console.log("Button clicked");
};

function App() {
  return (
    <Box>
      <Header />
      <Report />
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <ReportBtn label="Back to Dashboard" onClick={handleButtonClick} />
      </Box>
    </Box>
  );
}

export default App;
