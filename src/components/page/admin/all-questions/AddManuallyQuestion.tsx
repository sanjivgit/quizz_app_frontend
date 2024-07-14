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
import TextArea from "@/components/global/atoms/Textarea";

const OptionSchema = Yup.object({
  key: Yup.number().required("required"),
  hindi_option: Yup.string().required("required"),
  english_option: Yup.string().required("required"),
  option_path: Yup.string().optional(),
});

const QuestionSchema = Yup.object({
  type_id: Yup.number().required("required"),
  english_ques: Yup.string().required("required"),
  hindi_ques: Yup.string().required("required"),
  ques_img_path: Yup.string().optional(),
  marks: Yup.number().required("required"),
  negative_marks: Yup.number().required("required"),
  correct_answer: Yup.number().required("required"),
  test_paper_id: Yup.number().required("required"),
  options: Yup.array(OptionSchema),
});

type AddManuallyQuestionTypes = {
  handleCancel: () => void;
  testPaperId: number;
};

const AddManuallyQuestion: React.FC<AddManuallyQuestionTypes> = (props) => {
  const { handleCancel, testPaperId } = props;
  const queryClient = useQueryClient();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const initialValues = {
    type_id: "",
    english_ques: "",
    hindi_ques: "",
    ques_img_path: "",
    marks: "",
    negative_marks: "",
    correct_answer: "",
    test_paper_id: Number(testPaperId),
    options: [
      {
        key: 1,
        hindi_option: "",
        english_option: "",
        option_path: "",
      },
      {
        key: 2,
        hindi_option: "",
        english_option: "",
        option_path: "",
      },
      {
        key: 3,
        hindi_option: "",
        english_option: "",
        option_path: "",
      },
      {
        key: 4,
        hindi_option: "",
        english_option: "",
        option_path: "",
      },
    ],
  };

  /** Handle Add Data */
  const handleSubmit = async (values: any) => {
    activateWorkingAnimation();
    await axios({
      url: `${QUIZZ_URL.QUESTIONS_URL.create}`,
      method: "POST",
      data: values,
    });
  };

  /** Mutate Function */
  const { mutate } = useMutation(handleSubmit, {
    onSuccess: () => {
      handleCancel();
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
    <>
      <Toaster />
      {workingAnimation}
      <Formik
        initialValues={initialValues}
        validationSchema={QuestionSchema}
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
        }:any) => (
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="grid grid-cols-2 gap-6">
                <TextArea
                  label="English Question"
                  placeholder="Enter English Question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.english_ques}
                  error={errors.english_ques}
                  touched={touched.english_ques}
                  required
                  name="english_ques"
                />
                <TextArea
                  label="Hindi Question"
                  placeholder="Enter Hindi Question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hindi_ques}
                  error={errors.hindi_ques}
                  touched={touched.hindi_ques}
                  required
                  name="hindi_ques"
                />
                <Input
                  label="Question Type"
                  placeholder="Enter Question Type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type_id}
                  error={errors.type_id}
                  touched={touched.type_id}
                  name="type_id"
                  type="number"
                  required
                  maxlength={1}
                />
                <Input
                  label="Image Path"
                  placeholder="Enter Image Path"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ques_img_path}
                  error={errors.ques_img_path}
                  touched={touched.ques_img_path}
                  name="ques_img_path"
                />
                <Input
                  label="Marks"
                  placeholder="Enter Marks"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.marks}
                  error={errors.marks}
                  touched={touched.marks}
                  name="marks"
                  type="number"
                  required
                  maxlength={3}
                />
                <Input
                  label="Negative Marks"
                  placeholder="Enter Negative Marks"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.negative_marks}
                  error={errors.negative_marks}
                  touched={touched.negative_marks}
                  name="negative_marks"
                  type="number"
                  required
                  maxlength={4}
                />
                <Input
                  label="Correct Answer"
                  placeholder="Enter Correct Answer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.correct_answer}
                  error={errors.correct_answer}
                  touched={touched.correct_answer}
                  name="correct_answer"
                  type="number"
                  required
                  maxlength={1}
                />
              </div>
              <hr className="my-4" />
              <div>
                {values.options.map((option:any, index: number) => (
                  <div className="flex gap-2 mb-2" key={index}>
                    <div className="w-14">
                      <Input
                        label="Key"
                        value={values.options[index].key}
                        readonly={true}
                      />
                    </div>
                    <Input
                      label="English Option"
                      placeholder="Enter english option"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.options[index]?.english_option}
                      error={
                        errors?.options &&
                        errors?.options[index]?.english_option
                      }
                      touched={
                        touched?.options &&
                        touched?.options[index]?.english_option
                      }
                      name={`options[${index}].english_option`}
                      type="text"
                      required
                    />
                    <Input
                      label="Hindi Option"
                      placeholder="Enter hindi option"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.options[index]?.hindi_option}
                      error={
                        errors?.options && errors.options[index]?.hindi_option
                      }
                      touched={
                        touched?.options && touched?.options[index]?.hindi_option
                      }
                      name={`options[${index}].hindi_option`}
                      required
                    />
                    <Input
                      label="Option Image Path"
                      placeholder="Enter image path"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.options[index]?.option_path}
                      error={
                        errors?.options && errors.options[index]?.option_path
                      }
                      touched={
                        touched?.options && touched?.options[index]?.option_path
                      }
                      name={`options[${index}].option_path`}
                      required
                    />
                  </div>
                ))}
              </div>
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

export default AddManuallyQuestion;
