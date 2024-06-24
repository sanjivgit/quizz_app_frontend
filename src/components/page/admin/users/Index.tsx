"use client";

import React from "react";
import HeaderWidget from "./HeaderWidget";
import axios from "@/lib/axiosConfig";
import { useQuery } from "react-query";
import Loading from "@/components/Layouts/Loading";
import { QUIZZ_URL } from "@/utils/api/urls";
import HeroUserTable from "./Table";

const HeroUsers = () => {
  /* Fetching Data From Server */
  const fetch = async () => {
    try {
      const res = await axios({
        url: `${QUIZZ_URL.QUESTION_TYPE_URL.getAll}`,
        method: "GET",
      });

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  /* Getting All Question types */
  const { isFetching: isFetching, data: data } = useQuery(["users"], fetch);

  return (
    <div>
      <HeaderWidget />
      {isFetching ? <Loading /> : <HeroUserTable data={data} />}
    </div>
  );
};

export default HeroUsers;
