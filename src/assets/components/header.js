import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import logo from "../images/validatr-logo.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: "1px solid black",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header() {
  const [value, setValue] = React.useState(0);
  const tabsItem = ["Dashboard", "Team", "Projects", "Resources"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: "0px 15px 7px -8px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: { sm: "none", md: "block" }, mx: 4 }}>
        <img src={logo} className="w-24" alt="Validatr Logo" />
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabsItem.map((item) => (
            <Tab
              sx={{ py: 3, textTransform: "none" }}
              label={item}
              {...a11yProps(0)}
            />
          ))}
        </Tabs> */}
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          {tabsItem.map((item, index) => (
            <Tab
              key={index} // Provide a unique key based on the index
              sx={{ py: 3, textTransform: "none" }}
              label={item}
              {...a11yProps(index)} // Use the index to generate unique accessibility props
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Search className="seach">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "Search for anything" }}
          />
        </Search>
      </Box>
    </Box>
  );
}
export default Header;
