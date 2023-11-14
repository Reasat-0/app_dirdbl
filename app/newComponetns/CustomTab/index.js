"use client";

import React, { useState } from "react";

import { Box, Tabs, Tab, Typography } from "@mui/material";
import { DTypography } from "@/app/utils/imports";

const CustomTab = ({ data, scrollable }) => {
  // const [activeTab, setActiveTab] = useState(1);
  // const tabToggler = (idx) => {
  //   setActiveTab(idx);
  // }

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  // CustomTabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.number.isRequired,
  //   value: PropTypes.number.isRequired,
  // };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderColor: "divider", marginBottom: "40px" }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant={scrollable ? "scrollable" : null}
          aria-label="basic tabs example"
          centered={!scrollable}
        >
          {data.map((item, idx) => (
            <Tab
              label={
                <DTypography
                  variant={"medium2Normal"}
                  text={item?.tabTitle}
                  style={{
                    textTransform: "capitalize",
                  }}
                  // textAccent={"dark"}
                />
              }
              {...a11yProps(0)}
              key={idx}
            />
          ))}
        </Tabs>
      </Box>
      {data.map((item, idx) => (
        <CustomTabPanel value={activeTab} index={idx} key={idx}>
          {item?.tabContent}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
