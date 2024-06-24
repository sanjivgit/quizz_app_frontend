"use client";

import Button from "@/components/global/atoms/Button";
import Input from "@/components/global/atoms/Input";
import { useWorkingAnimation } from "@/components/global/molecules/general/useWorkingAnimation";
import { QUIZZ_URL } from "@/utils/api/urls";
import axios from "@/lib/axiosConfig";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ExcelFileUploadUi from "./ExcelFileUpload";
import { useMutation, useQueryClient } from "react-query";
import toast, { Toaster } from "react-hot-toast";

const TestSchema = Yup.object({
  file: Yup.string().required("file is required"),
});

type UploadQuestionsTypes = {
  handleCancel: () => void;
  testPaperId: number;
};

const UploadQuestions: React.FC<UploadQuestionsTypes> = (props) => {
  const { handleCancel, testPaperId } = props;
  const queryClient = useQueryClient();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const initialValues = {
    file: "",
  };

  /** Handle Upload */
  const handleSubmit = async (values: any) => {
    activateWorkingAnimation();
    const formData = new FormData();
    formData.append("doc", values.file);
    await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.upload}/${testPaperId}`,
      method: "POST",
      data: formData,
    });
  };

  const { mutate } = useMutation(handleSubmit, {
    onSuccess: () => {
      handleCancel();
      queryClient.invalidateQueries(["questions", testPaperId]);
    },
    onError: () => {
      toast.error("Something Went Wrong!!!");
    },
    onSettled: () => {
      hideWorkingAnimation();
    },
  });

  return (
    <>
      <Toaster />
      {workingAnimation}
      <Formik
        initialValues={initialValues}
        validationSchema={TestSchema}
        onSubmit={mutate}
      >
        {({
          errors,
          touched,
          handleReset,
          handleSubmit,
          setFieldValue,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <ExcelFileUploadUi
                handleUpload={(file) => setFieldValue("file", file)}
                readonly={false}
              />
              {touched.file && errors.file && <span>{errors.file}</span>}
            </div>

            <div className="flex gap-3 float-end mt-6">
              <Button
                buttontype="button"
                onClick={handleCancel}
                variant="cancel"
              >
                Cancel
              </Button>
              {dirty && (
                <>
                  <Button
                    buttontype="button"
                    onClick={handleReset}
                    variant="cancel"
                  >
                    Reset
                  </Button>
                  <Button buttontype="submit" variant="primary">
                    Submit
                  </Button>
                </>
              )}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UploadQuestions;
