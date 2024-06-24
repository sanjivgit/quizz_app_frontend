"use client";

import React, { useState } from "react";
import HeaderWidget from "./HeaderWidget";
import AddTest from "./AddTest";
import Popup from "@/components/global/molecules/Popup";
import axios from "@/lib/axiosConfig";
import { useQuery } from "react-query";
import Loading from "@/components/Layouts/Loading";
import { QUIZZ_URL } from "@/utils/api/urls";
import HeroTestPapersTable from "./Table";

type stateTypes = {
  showPopup: boolean;
};

const HeroAllTestPapers = ({ testId }: { testId: number }) => {
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
        url: `${QUIZZ_URL.TEST_PAPER_URL.getAll}/${testId}`,
        method: "GET",
      });

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  /* Getting All Tests */
  const { isFetching: isFetching, data: data } = useQuery(
    ["test-papers", testId],
    fetch
  );

  return (
    <div>
      {showPopup && (
        <Popup title="">
          <AddTest testId={testId} handleCancel={handleShowPopup} />
        </Popup>
      )}
      <HeaderWidget handleAdd={handleShowPopup} />
      {isFetching ? <Loading /> : <HeroTestPapersTable testId={testId} data={data} />}
    </div>
  );
};

export default HeroAllTestPapers;
