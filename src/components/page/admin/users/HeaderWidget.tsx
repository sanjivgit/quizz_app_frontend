"use client";
import Button from "@/components/global/atoms/Button";
import goBack from "@/utils/helper";
import React from "react";

type HeaderWidgetProps ={
}

const HeaderWidget:React.FC<HeaderWidgetProps> = (props) => {
  return (
    <div className="bg-white rounded p-4 flex justify-between border shadow-lg">
      <Button
        variant="cancel"
        onClick={goBack}
        className="hover:bg-white hover:text-black"
      >
        Back
      </Button>
      <h1>Existing Users</h1>
    </div>
  );
};

export default HeaderWidget;
