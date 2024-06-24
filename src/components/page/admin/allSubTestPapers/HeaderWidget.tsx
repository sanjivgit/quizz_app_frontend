"use client";
import Button from "@/components/global/atoms/Button";
import goBack from "@/utils/helper";
import React from "react";

type HeaderWidgetProps ={
handleAdd: () => void;
}

const HeaderWidget:React.FC<HeaderWidgetProps> = (props) => {
  const {handleAdd} = props;
  return (
    <div className="bg-white rounded p-4 flex justify-between border shadow-lg">
      <Button
        variant="cancel"
        onClick={goBack}
        className="hover:bg-white hover:text-black"
      >
        Back
      </Button>
      <Button onClick={handleAdd} variant="primary">Add New Test Paper</Button>
    </div>
  );
};

export default HeaderWidget;
