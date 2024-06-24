"use client";

import Button from "@/components/global/atoms/Button";
import Input from "@/components/global/atoms/Input";
import { useWorkingAnimation } from "@/components/global/molecules/general/useWorkingAnimation";
import { QUIZZ_URL } from "@/utils/api/urls";
import axios from "@/lib/axiosConfig";
import { Formik } from "formik";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";

const TestSchema = Yup.object({
  name: Yup.string().required("name is required"),
});

type AddTestTypes = {
  handleCancel: () => void;
};

const AddTest: React.FC<AddTestTypes> = (props) => {
  const { handleCancel } = props;
  const queryClient = useQueryClient();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const initialValues = {
    name: "",
  };

  /** Handle Add Data */
  const handleSubmit = async (values: any) => {
    activateWorkingAnimation();
      await axios({
        url: `${QUIZZ_URL.QUESTION_TYPE_URL.create}`,
        method: "POST",
        data: values,
      });
  };

  /** Mutate Function */
  const { mutate } = useMutation(handleSubmit, {
    onSuccess: () => {
      handleCancel();
      queryClient.invalidateQueries(["types"]);
    },
    onError: () =>{
      toast.error("Something Went Wrong!!")
    },
    onSettled: () =>{
      hideWorkingAnimation();
    }
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
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleReset,
          handleSubmit,
          dirty,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <Input
                label="Test Name"
                placeholder="Enter test name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={touched.name}
                name="name"
                required
                maxlength={15}
              />
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

export default AddTest;
