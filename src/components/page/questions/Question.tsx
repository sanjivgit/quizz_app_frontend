import Image from "next/image";
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/icons/left-arrow.png";

type QuestionPropType = {
  question: any;
  handleSelectOption: (option: number) => void;
  handleQuestionTimer: () => void;
};

const Question: React.FC<QuestionPropType> = (props) => {
  const { question, handleSelectOption, handleQuestionTimer } = props;
  const [state, setState] = useState({
    startSec: 0,
    startMin: 0,
  });
  const { startSec, startMin } = state;

  ////////// handleTimer
  useEffect(() => {
    const interval = setInterval(() => {
      handleQuestionTimer()
    }, 1000);
    return () => clearInterval(interval);
  }, [question]);

  return (
    <section
      style={{
        height: `calc(100vh - 3.5rem)`,
      }}
      className="hide-scrollbar w-full overflow-y-auto bg-white"
    >
      <div
        className={`border-b w-full shadow-md bg-primary_bg sticky top-0 flex h-[2.5rem] items-center justify-between px-5`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full flex items-center justify-center bg-gray-300 p-2 text-sm">
              {question?.question_no}
            </div>
            <div className="h-6 w-[2px] bg-white mx-2"></div>
            <Image src={leftArrow} height={17} width={17} alt="time" />
            <span className="text-white text-sm ml-2">
              {String(question.min).padStart(2, '0')}:{String(question.sec).padStart(2, '0')}
            </span>
            <div className="h-4 w-8 bg-green-300 text-xs flex items-center justify-center px-2 ml-3 rounded">
              <span>+1.0</span>
            </div>
            <div className="h-4 w-8 bg-red-300 text-xs flex items-center justify-center px-2 ml-3 rounded">
              <span>-0.5</span>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={leftArrow}
              height={17}
              width={17}
              alt="time"
              className="mr-2"
            />
            <Image src={leftArrow} height={17} width={17} alt="time" />
          </div>
        </div>
      </div>
      {/* Question */}
      <div className="my-2 mx-3">
        <b>{question?.title}</b>
        {question?.options.map((item: any, index: number) => (
          <div
            className={`flex items-start border px-3 py-2 rounded mt-2 cursor-pointer ${
              item?.key === question?.selected_option && "bg-green-200"
            }`}
            onClick={() => handleSelectOption(index + 1)}
          >
            <span className="mr-2">{index + 1}.</span>
            <span>{item?.option}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Question;
