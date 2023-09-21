import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import robot from "../../images/robotLogo.png";
import Fields from "../fields";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Report() {
  const initialFieldValues = [
    { id: 1, heading: "Name of Business", value: "TechTax" },
    {
      id: 2,
      heading: "Problem:",
      value:
        "Our startup, TechTax Soluions, addresses the problem of inefficient corporate tax calculation and filing.",
    },
    {
      id: 3,
      heading: "Target Market:",
      value: "Accountant and Accounting firms",
    },
    {
      id: 4,
      heading: "Pain Points:",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    { id: 5, heading: "Solutions:", value: "Initial Value 3" },
    { id: 6, heading: "Differentiate:", value: "Initial Value 3" },
    { id: 7, heading: "Monetization plan:", value: "Initial Value 3" },
  ];

  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  // Function to update the field value
  const updateFieldValue = (id, heading, newValue) => {
    const updatedValues = fieldValues.map((field) =>
      field.id === id ? { ...field, heading, value: newValue } : field
    );
    setFieldValues(updatedValues);
  };

  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          my: 10,
          py: 5,
          flexDirection: "column",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {/* Top Area of Report */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={robot} alt="Robot" className="w-16 h-14" />

          <Button
            variant="contained"
            sx={{
              height: 30,
              textTransform: "none",
              borderRadius: "0 10px 0 10px",
              background: " linear-gradient(to right,#4E75FF,#B703CA)",
              py: 2,
            }}
          >
            <InfoOutlinedIcon sx={{ fontSize: 15, marginRight: 1 }} />
            Information
          </Button>
        </Box>

        {/* Field Area of Report */}
        <Box sx={{ my: 4, display: "flex", flexDirection: "column" }}>
          {fieldValues.map((field) => (
            <Box key={field.id}>
              <Typography sx={{ my: 2 }} variant="h6" component="h2">
                {field.heading}
              </Typography>

              <Fields
                id={field.id}
                initialValue={field.value}
                updateField={updateFieldValue}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Report;
