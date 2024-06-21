"use client";

import Card from "@/components/global/molecules/Card";
import Link from "next/link";
import React from "react";
import axios from "@/lib/axiosConfig";
import { useQuery } from "react-query";
import { FINANCE_URL } from "@/utils/api/urls";
import Loader from "@/components/global/atoms/Loader";
import LoaderSkeleton from "@/components/global/atoms/LoaderSkeleton";

const HeroHome = () => {
  const fetchData = async (endpoint: string) => {
    try {
      const res = await axios({
        url: endpoint,
        method: "GET",
      });

      if (!res.data.status) throw Error("Something Went Wrong!!");

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const useForApiCall = (endpoint: string) => {
    return useQuery([endpoint], () => fetchData(endpoint));
  };

  ///// Getting Leated Job list
  const { isFetching: isLtJobFetching, data: leateatJobs = [] } = useForApiCall(
    `${FINANCE_URL.LEATEST_JOB.get}`
  );

  ///// Getting Admit Card list
  const { isFetching: isAtCardFetching, data: admitCards = [] } = useForApiCall(
    `${FINANCE_URL.ADMIT_CARD.get}`
  );

  ///// Getting Result list
  const { isFetching: isRltFetching, data: results = [] } = useForApiCall(
    `${FINANCE_URL.RESULT.get}`
  );

  return (
    <div>
      <div className="grid gap-10 grid-cols-2 max-md:grid-cols-2">
        <div className="h-32 w-full bg-gray-300 flex items-center justify-center rounded-md">
          My Score
        </div>
        <div className="h-32 w-full bg-gray-300 flex items-center justify-center rounded-md">
          My Score
        </div>
      </div>
      {/* <header className="text-black font-bold text-xl my-3">Free Content</header>
      <div className="grid gap-10 grid-cols-2 max-md:grid-cols-2">
        <div className="h-32 w-full bg-gray-300 flex items-center justify-center rounded-md">
          My Score
        </div>
        <div className="h-32 w-full bg-gray-300 flex items-center justify-center rounded-md">
          My Score
        </div>
      </div> */}
      <header className="text-black font-bold text-xl my-3">Featured</header>
      <div className="grid gap-3 grid-cols-3 max-md:grid-cols-2">
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
        <div className="h-10 w-full bg-gray-300 flex items-center rounded-lg px-3">
          SSC
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
