import SettingsOption from "@/app/pageComponents/Settings/SettingsOption";
import React from "react";

const OptionPage = ({ params }) => {
  return <SettingsOption option={params.option} />;
};

export default OptionPage;
