import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

function Fields({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // setValue(tempValue);
    // setIsEditing(false);
    const trimmedValue = tempValue.trim();
    if (trimmedValue !== "") {
      setValue(trimmedValue);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTempValue(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "8px",
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        multiline
        value={isEditing ? tempValue : value}
        maxRows={2}
        autoFocus
        onChange={handleChange}
        disabled={!isEditing}
        placeholder={isEditing ? "" : "Enter something..."}
        sx={{
          borderLeft: "3px solid purple",
          backgroundColor: "#EEEDED",
          fontSize: 14,
        }}
      />

      {!isEditing ? (
        <Button
          variant="contained"
          sx={{
            minWidth: "30px",
            borderRadius: "50%",
            p: 1,
            mx: 2,
            backgroundColor: "#000",
          }}
          onClick={handleEdit}
        >
          <EditIcon sx={{ fontSize: 16, color: "#fff" }} />
        </Button>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Button
            color="error"
            sx={{
              color: "#000",
              borderColor: "lightgray",
              textTransform: "none",
              mx: 1,
              py: 0,
            }}
            variant="outlined"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            color="success"
            sx={{
              color: "#000",
              borderColor: "lightgray",
              textTransform: "none",
              py: 0,
            }}
            variant="outlined"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Fields;
