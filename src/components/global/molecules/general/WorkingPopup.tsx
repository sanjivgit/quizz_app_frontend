import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Popup from "../Popup";

const WorkingPopup: React.FC = () => {
  const delay = 500;
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setStep(step > 2 ? 0 : step + 1);
    }, delay);
    return () => clearTimeout(delayInputTimeoutId);
  });

  return (
    <>
      <Popup title="">
        <div className="flex flex-col justify-center items-center w-40">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <span className="text-[20px] text-black my-8">
            Working {".".repeat(step)}
          </span>
        </div>
      </Popup>
    </>
  );
};

export default WorkingPopup;
