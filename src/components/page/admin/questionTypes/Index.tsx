"use client";

import React, { useState } from "react";
import HeaderWidget from "./HeaderWidget";
import HeroTableComponent from "./Table";
import AddTest from "./AddType";
import Popup from "@/components/global/molecules/Popup";
import axios from "@/lib/axiosConfig";
import { useQuery } from "react-query";
import Loading from "@/components/Layouts/Loading";
import { QUIZZ_URL } from "@/utils/api/urls";

type stateTypes = {
  showPopup: boolean;
};

const HeroQuestionType = () => {
  const [state, setState] = useState<stateTypes>({
    showPopup: false,
  });
  const { showPopup } = state;

  /* Handle show popup to add new test */
  const handleShowPopup = () => {
    setState({ ...state, showPopup: !showPopup });
  };

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
  const { isFetching: isFetching, data: data } = useQuery(["types"], fetch);

  return (
    <div>
      {showPopup && (
        <Popup title="">
          <AddTest handleCancel={handleShowPopup} />
        </Popup>
      )}
      <HeaderWidget handleAdd={handleShowPopup} />
      {isFetching ? <Loading /> : <HeroTableComponent data={data} />}
    </div>
  );
};

export default HeroQuestionType;
