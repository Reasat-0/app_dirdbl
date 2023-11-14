import React from "react";

const json_parser = (main_json) => {
  if(main_json){
    const parsed_obj = JSON.parse(main_json);
    return parsed_obj;

  }
};

export default json_parser;
