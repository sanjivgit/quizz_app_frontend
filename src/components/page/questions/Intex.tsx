"use client";
import Button from "@/components/global/atoms/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import leftArrow from "@/assets/icons/left-arrow.png";
// import Sidebar from "@/components/global/layout/Sidebar";
import Question from "./Question";

type HeaderPropType = {
  handleToggle: () => void;
  startHr: number;
  startMin: number;
  startSec: number;
};

const Header: React.FC<HeaderPropType> = (props) => {
  const { handleToggle, startHr, startMin, startSec } = props;
  return (
    <div
      className={`border-b w-full bg-primary_bg sticky top-0 flex h-[3.5rem] items-center justify-between px-5`}
    >
      <div className="flex items-center">
        <Image
          className="cursor-pointer"
          src={leftArrow}
          height={30}
          width={30}
          alt=""
        />
        <div className="flex flex-col text-white text-xs ml-2">
          <span>
            {String(startHr).padStart(2, "0")}:
            {String(startMin).padStart(2, "0")}:
            {String(startSec).padStart(2, "0")}
          </span>
          <span>CGL Constable Test</span>
        </div>
      </div>
      <div>
        <Image
          className="cursor-pointer"
          src={leftArrow}
          height={40}
          width={40}
          alt=""
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

//////////////////// Sidebar

const Sidebar: React.FC<any> = (props) => {
  const { questions, className, currentQuestionNumber, handleJumpToQuestion } =
    props;
  return (
    <div
      style={{ height: "calc(100vh - 3.5rem)" }}
      className={`${className} flex flex-col justify-between`}
    >
      <div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <span className="text-sm ml-2">Questions: 150</span>
          <span className="text-sm">Total Marks: 150</span>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-gray-500 rounded-full border p-2 text-xs flex items-center justify-center mr-1">
              100
            </div>
            <span className="text-sm">Not Answered</span>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-gray-500 rounded-full border p-2 text-xs flex items-center justify-center mr-1">
              0
            </div>
            <span className="text-sm">Not Answered</span>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-gray-500 rounded-full border p-2 text-xs flex items-center justify-center mr-1">
              0
            </div>
            <span className="text-sm">Not Answered</span>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 bg-gray-500 rounded-full border p-2 text-xs flex items-center justify-center mr-1">
              0
            </div>
            <span className="text-sm">Not Answered</span>
          </div>
        </div>
        <hr />
        <div className="p-2 flex flex-wrap gap-1">
          {questions.map((question: any, index: number) => (
            <div
              key={index}
              className={`h-7 w-7 rounded-full border p-2 text-black text-xs flex items-center justify-center mr-1 cursor-pointer ${
                currentQuestionNumber === index && "border-red-700 text-red-700"
              } ${
                question?.selected_option !== 0 && "bg-green-500 text-white"
              }`}
              onClick={() => handleJumpToQuestion(index)}
            >
              {question?.question_no}
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="primary"
        className="m-2 flex items-center justify-center"
      >
        Submit Test
      </Button>
    </div>
  );
};

////////////////////// Main component
const QuestionsHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState({
    isSelected: true,
    index: 0,
    startHr: 1,
    startMin: 59,
    startSec: 59,
  });
  const [questions, setQuestions] = useState([
    {
      question_no: 1,
      title: "Question 1",
      img: "img.png",
      correc_option: 1,
      marks: 2,
      nagetive_marks: 1,
      selected_option: 0,
      min: 0,
      sec: 0,
      options: [
        {
          key: 1,
          option: "option 1",
          img: "opimg.png",
        },
        {
          key: 2,
          option: "option 2",
          img: "opimg.png",
        },
        {
          key: 3,
          option: "option 3",
          img: "opimg.png",
        },
        {
          key: 4,
          option: "option 4",
          img: "opimg.png",
        },
      ],
    },
    {
      question_no: 2,
      title: "Question 2",
      img: "img.png",
      correc_option: 1,
      marks: 2,
      nagetive_marks: 1,
      selected_option: 0,
      min: 0,
      sec: 0,
      options: [
        {
          key: 1,
          option: "option 1",
          img: "opimg.png",
        },
        {
          key: 2,
          option: "option 2",
          img: "opimg.png",
        },
        {
          key: 3,
          option: "option 3",
          img: "opimg.png",
        },
        {
          key: 4,
          option: "option 4",
          img: "opimg.png",
        },
      ],
    },
    {
      question_no: 3,
      title: "Question 3",
      img: "img.png",
      correc_option: 1,
      marks: 2,
      nagetive_marks: 1,
      selected_option: 0,
      min: 0,
      sec: 0,
      options: [
        {
          key: 1,
          option: "option 1",
          img: "opimg.png",
        },
        {
          key: 2,
          option: "option 2",
          img: "opimg.png",
        },
        {
          key: 3,
          option: "option 3",
          img: "opimg.png",
        },
        {
          key: 4,
          option: "option 4",
          img: "opimg.png",
        },
      ],
    },
  ]);

  const { index, startHr, startMin, startSec } = state;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  /////////////// handleJumbToTheQuestion ////////////////
  const handleJumpToQuestion = (index: number) => {
    setState({ ...state, index });
  };

  //////////////// handle Next Button
  const handleNextButton = () => {
    if (index < questions.length - 1) setState({ ...state, index: index + 1 });
  };

  //////////////// handle Next Button
  const handlePrevButton = () => {
    if (index > 0) setState({ ...state, index: index - 1 });
  };

  /////////////// handle select option
  const handleSelectOption = (option: number) => {
    setQuestions((prev) => {
      const data = prev[index];
      const updatedData = { ...data, selected_option: option };
      const newData = [...prev];
      newData[index] = updatedData;
      return newData;
    });
  };

  ////////// handleTimer
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev: any) => {
        if (prev.startSec === 0 && prev.startMin > 0) {
          return { ...prev, startSec: 59, startMin: prev.startMin - 1 };
        } else if (prev.startMin === 0 && prev.startHr > 0) {
          return {
            ...prev,
            startSec: prev.startSec - 1,
            startMin: 59,
            startHr: prev.startHr - 1,
          };
        } else if (prev.startSec > 0) {
          return { ...prev, startSec: prev.startSec - 1 };
        } else {
          return { ...prev };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //////////////////////////  Timer For Question
  const handleQuestionTimer = () => {
    setQuestions((prev) => {
      const data = prev[index];
      let updatedData = { ...data };
      if (data.sec === 59) {
        updatedData = { ...data, sec: 0, min: data.min + 1 };
      } else if (data.sec < 59) {
        updatedData = { ...data, sec: data.sec + 1 };
      }
      const newQuestions = [...prev];
      newQuestions[index] = updatedData;
      return newQuestions;
    });
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <Header
        handleToggle={handleToggle}
        startHr={startHr}
        startMin={startMin}
        startSec={startSec}
      />
      <div className="flex flex-row-reverse mb-4">
        <Sidebar
          questions={questions}
          currentQuestionNumber={index}
          handleJumpToQuestion={handleJumpToQuestion}
          className={`hide-scrollbar shadow-lg border-r w-2/6 overflow-y-auto overflow-x-hidden z-50 transition-all duration-300 ease-in-out ${
            !isExpanded
              ? "w-[0]"
              : "max-tmp:absolute max-tmp:bg-white  max-md:w-2/4 max-sm:w-2/3 max-xs:w-full"
          }`}
        />
        <Question
          question={questions[index]}
          handleSelectOption={handleSelectOption}
          handleQuestionTimer={handleQuestionTimer}
        />
      </div>
      <div className="bg-white h-14 w-full border-t sticky bottom-0 shadow-md p-2 flex items-center justify-between gap-2">
        <Button
          className="flex items-center justify-center"
          variant="primary"
          onClick={handlePrevButton}
        >
          Previous
        </Button>

        <Button
          className="flex items-center justify-center"
          variant="primary"
          onClick={handleNextButton}
        >
          Save & Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionsHero;
