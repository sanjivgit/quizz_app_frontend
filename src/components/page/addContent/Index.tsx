"use client";

import Button from "@/components/global/atoms/Button";
import Input from "@/components/global/atoms/Input";
import Select from "@/components/global/atoms/Select";
import TextArea from "@/components/global/atoms/Textarea";
import LosingDataConfirm from "@/components/global/molecules/LosingDataConfirm";
import Popup from "@/components/global/molecules/Popup";
import goBack from "@/utils/helper";
import JoditEditor from "jodit-react";
import React, { useState } from "react";
import MultiSelect from "react-select";
import makeAnimated from "react-select/animated";

const HeroAddContent = () => {
  const [content, setContent] = useState("");
  const [showLosingConfirm, setShowLosingConfirm] = useState(false);
  const animatedComponents = makeAnimated();

  const handleShowLosingConfirm = () => {
    setShowLosingConfirm(!showLosingConfirm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      {showLosingConfirm && (
        <Popup title="">
          <LosingDataConfirm
            cancel={handleShowLosingConfirm}
            continue={goBack}
          />
        </Popup>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <label htmlFor="multi-content-type">Select Content Type</label>
            <MultiSelect
              id="multi-content-type"
              options={options}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
            />
          </div>
          <Input name="start-date" label="Start Date" type="date" />
          <Input name="end-date" label="End Date" type="date" />
        </div>

        <TextArea 
        onChange={()=> {}}
        name="title" label="Title" />

        <JoditEditor
          className="mt-5"
          value={content}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            console.log("first", newContent);
          }}
        />
        <div className="flex gap-4 justify-end mt-5">
          <Button
            buttontype="button"
            variant="cancel"
            onClick={handleShowLosingConfirm}
          >
            Cancel
          </Button>
          <Button buttontype="submit" variant="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeroAddContent;
