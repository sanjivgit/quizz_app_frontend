"use client";
import Button from "@/components/global/atoms/Button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import QuestionsHero from "../questions/Intex";
import { useEventListener } from "@/components/Hooks/useEventListener";
import Link from "next/link";

const DetailWithTermCondition = () => {
  // const [isHidden, setIsHidden] = useState(true);
  // const ESCAPE_KEYS = ["27", "Escape"];
  // const questions = useRef<HTMLDivElement>(null);

  // const openFullscreen = () => {
  //   const elem:any = questions.current;
  //   if (elem) {
  //     if (elem.requestFullscreen) {
  //       elem.requestFullscreen();
  //     } else if (elem.webkitRequestFullscreen) {
  //       elem.webkitRequestFullscreen();
  //     } else if (elem.msRequestFullscreen) {
  //       elem.msRequestFullscreen();
  //     }
  //     setIsHidden(false);
  //   }
  // };

  // const handler = ({ key }: KeyboardEvent) => {
  //   if (ESCAPE_KEYS.includes(String(key))) {
  //     console.log("Escape key pressed!");
  //     setIsHidden(true);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     useEventListener("keydown", handler, window);
  //   }
  // }, [handler]);

  return (
    <div className="relative">
      <div
        style={{ height: "calc(100vh - 3rem)" }}
        className="flex flex-col justify-between"
      >
        <div className="my-2">
          <div className="flex items-center justify-between mx-8 mt-4">
            <div className="flex flex-col items-center">
              <Image src="" height={20} width={20} alt="?" />
              <span>150 Question</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="" height={20} width={20} alt="?" />
              <span>150 Question</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="" height={20} width={20} alt="?" />
              <span>150 Question</span>
            </div>
          </div>
          <hr className="my-4" />
          {/*Term Condition */}
          <div className="flex items-start mx-8">
            <input className="mt-1 mr-2" type="checkbox" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              beatae alias vel est nemo quis doloribus ratione suscipit
              officiis. Id sed delectus inventore dolores, eum iure veniam iste
              ex vero!
            </span>
          </div>
        </div>
        <div className="bg-white h-14 w-full border-t sticky bottom-0 shadow-md p-2 flex items-center justify-center">
          <Link
            className="w-full flex items-center justify-center"
            href="/questions"
          >
            <Button
              className="w-3/4 flex items-center justify-center"
              variant="primary"
            >
              Attempt Test
            </Button>
          </Link>
        </div>
        {/* {isOpen && ( */}

        {/* )} */}
      </div>
    </div>
  );
};

export default DetailWithTermCondition;
