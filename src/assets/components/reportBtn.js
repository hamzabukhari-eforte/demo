import React from "react";
import Button from "@mui/material/Button";

function ReportBtn({ label, onClick }) {
  return (
    <Button
      color="inherit"
      variant="outlined"
      size="large"
      sx={{
        minWidth: 80,
        p: "15px 30px",
        mb: 5,
        transition: "all 0.3s ease-out",
        textTransform: "none",
        borderRadius: "50px",
        fontSize: 20,
        fontWeight: 700,
        transform: "scale(1.0)",
        "&:hover": {
          transition: "all 0.3s ease-in",
          transform: "scale(1.03)",
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ReportBtn;
