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
  sub_title: Yup.string().optional(),
  test_id: Yup.number().required("test id is required"),
  total_marks: Yup.number().required("total marks is required"),
  duration: Yup.number().required("duration is required"),
  price: Yup.number().required("price is required"),
});

type AddTestPapersTypes = {
  handleCancel: () => void;
  testId: number;
};

const AddTestPapers: React.FC<AddTestPapersTypes> = (props) => {
  const { handleCancel, testId } = props;
  const queryClient = useQueryClient();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const initialValues = {
    name: "",
    sub_title: "",
    test_id: testId,
    total_marks: "",
    duration: "",
    price: "",
  };

  /** Handle Add Data */
  const handleSubmit = async (values: any) => {
    activateWorkingAnimation();
    const newData = {...values};
    newData.duration = String(values.duration)
    await axios({
      url: `${QUIZZ_URL.TEST_PAPER_URL.create}`,
      method: "POST",
      data: newData,
    });
  };

  /** Mutate Function */
  const { mutate } = useMutation(handleSubmit, {
    onSuccess: () => {
      handleCancel();
      queryClient.invalidateQueries(["test-papers", testId]);
    },
    onError: () => {
      toast.error("Something Went Wrong!!");
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
              <Input
                label="Sub Title"
                placeholder="Enter sub title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sub_title}
                error={errors.sub_title}
                touched={touched.sub_title}
                name="sub_title"
                maxlength={25}
              />
              <Input
                label="Total Marks"
                placeholder="Enter total marks"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.total_marks}
                error={errors.total_marks}
                touched={touched.total_marks}
                name="total_marks"
                type="number"
                required
                maxlength={25}
              />
              <Input
                label="Dutaion In Minuntes"
                placeholder="Enter dutaion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.duration}
                error={errors.duration}
                touched={touched.duration}
                name="duration"
                type="number"
                required
                maxlength={25}
              />
              <Input
                label="Price"
                placeholder="Enter price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                error={errors.price}
                touched={touched.price}
                name="price"
                type="number"
                required
                maxlength={25}
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

export default AddTestPapers;
