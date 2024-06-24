"use client";

import React, { useState } from "react";
import HeaderWidget from "./HeaderWidget";
import Popup from "@/components/global/molecules/Popup";
import axios from "@/lib/axiosConfig";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUIZZ_URL } from "@/utils/api/urls";
import HeroQuestionTable from "./QuestionTable";
import Loader from "@/components/global/atoms/Loader";
import UploadQuestions from "./UploadQuestion";
import AddManuallyQuestion from "./AddManuallyQuestion";
import toast, { Toaster } from "react-hot-toast";
import { useWorkingAnimation } from "@/components/global/molecules/general/useWorkingAnimation";
import LosingDataConfirm from "@/components/global/molecules/LosingDataConfirm";

type stateTypes = {
  showUploadPopup: boolean;
  showAddPopup: boolean;
  showConfirmPopup: boolean;
};

const HeroAllTestPapers = ({ testPaperId }: { testPaperId: number }) => {
  const queryClient = useQueryClient();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const [state, setState] = useState<stateTypes>({
    showUploadPopup: false,
    showAddPopup: false,
    showConfirmPopup: false,
  });
  const { showUploadPopup, showAddPopup, showConfirmPopup } = state;

  /* Handle show popup to upload questions */
  const handleShowUploadPopup = () => {
    setState({ ...state, showUploadPopup: !showUploadPopup });
  };

  /* Fetching Data From Server */
  const fetch = async () => {
    try {
      const res = await axios({
        url: `${QUIZZ_URL.QUESTIONS_URL.getAll}/${testPaperId}/get-all`,
        method: "GET",
      });

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  /* Getting All Tests */
  const { isFetching: isFetching, data: data } = useQuery(
    ["questions", testPaperId],
    fetch
  );

  /* Handle show popup to add new question */
  const handleShowAddPopup = () => {
    setState({ ...state, showAddPopup: !showAddPopup });
  };

   /* Handle show Confirm Popup */
   const handleShowConfirmPopup = () => {
    setState({ ...state, showConfirmPopup: !showConfirmPopup });
  };

  /* Handle delet question */
  const handleDelete = async () => {
    activateWorkingAnimation();
    return await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.delete}`,
      method: "DELETE",
      data: {
        id: Number(testPaperId),
      },
    });
  };

  const { mutate } = useMutation(handleDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries(["questions", testPaperId]);
    },
    onError: () => {
      toast.error("Something Went Wrong!!");
    },
    onSettled: () => {
      hideWorkingAnimation();
    },
  });

  return (
    <div>
      {workingAnimation}
      <Toaster />
      {showUploadPopup && (
        <Popup title="">
          <UploadQuestions
            testPaperId={testPaperId}
            handleCancel={handleShowUploadPopup}
          />
        </Popup>
      )}

      {showConfirmPopup && (
        <Popup title="">
        <LosingDataConfirm cancel={handleShowConfirmPopup} continue={mutate}/>
        </Popup>
      )}

      {showAddPopup && (
        <Popup width="90%" title="">
          <AddManuallyQuestion
            testPaperId={testPaperId}
            handleCancel={handleShowAddPopup}
          />
        </Popup>
      )}
      <HeaderWidget
        handleUpload={handleShowUploadPopup}
        handleAdd={handleShowAddPopup}
        handleDelete={handleShowConfirmPopup}
      />
      {isFetching ? (
        <Loader />
      ) : (
        <HeroQuestionTable testPaperId={testPaperId} data={data?.questions} />
      )}
    </div>
  );
};

export default HeroAllTestPapers;
