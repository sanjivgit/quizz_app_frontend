"use client";

import Button from "@/components/global/atoms/Button";
import Input from "@/components/global/atoms/Input";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "@/lib/axiosConfig";
import { QUIZZ_URL } from "@/utils/api/urls";
import { useWorkingAnimation } from "@/components/global/molecules/general/useWorkingAnimation";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface RegistrationInitialData {
  name: string;
  phone: string;
  password: string;
  confirm_password: string;
}

interface OtpVerifyInitialData {
  otp: string;
}

const Registration = () => {
  const [errorMsg, setErrorMsg] = useState<string>();
  const [workingAnimation, activateWorkingAnimation, hideWorkingAnimation] =
    useWorkingAnimation();
  const router = useRouter();
  const [state, setState] = useState<any>({
    hide: true,
    confirmHide: true,
    isSentOtp: false,
    registerData: {},
  });

  const { hide, confirmHide, isSentOtp, registerData } = state;

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    phone: Yup.string().required("Phone number is required").max(10),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .test("confirm_password", (value, validationContext) => {
        const {
          createError,
          parent: { password },
        } = validationContext;

        if (password !== value) {
          return createError({
            message: "password didin't match",
          });
        }

        return true;
      }),
  });

  const OtpVerifySchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
  });

  ///////////////// Handling Registration Logics /////////////

  const handleRegistration = async (values: RegistrationInitialData) => {

    try {
      activateWorkingAnimation();
      await axios({
        url: `${QUIZZ_URL.AUTH.sendOtp}`,
        method: "POST",
        data: {
          phone: values.phone,
        },
      });

      setState({ ...state, isSentOtp: true, registerData: values });
    } catch (error) {
      setErrorMsg("Something Went Wrong!!");
      console.log(error);
    } finally {
      hideWorkingAnimation();
    }
  };

  ///////////////// Handling OtpVerify Logics /////////////

  const handleOtpVerify = async (values: OtpVerifyInitialData) => {
    
    try {
      activateWorkingAnimation();
      const res = await axios({
        url: `${QUIZZ_URL.AUTH.register}`,
        method: "POST",
        data: {
          phone: registerData.phone,
          full_name: registerData.name,
          password: registerData.password,
          otp: values.otp,
        },
      });

      router.push("/auth/login");
    } catch (error:any) {
      toast.error("Something went wrong")
      setErrorMsg("Something Went Wrong!!");
      console.log(error);
    } finally {
      hideWorkingAnimation();
    }
  };

  const handleHideShowPass = () => {
    setState({ ...state, hide: !hide });
  };

  const handleHideShowPassConfirm = () => {
    setState({ ...state, confirmHide: !confirmHide });
  };

  ////////
  const [timer, setTimer] = useState({
    sec: 59,
    min: 1,
  });
  const { sec, min } = timer;

  useEffect(() => {
    (function () {
      setTimeout(() => {
        if (sec === 0 && min > 0) {
          setTimer({ ...timer, min: min - 1, sec: 59 });
        } else if (sec > 0) {
          setTimer({ ...timer, sec: sec - 1 });
        }
      }, 1000);
    })();
  }, [sec]);

  ///////// Handle Re-Send Otp ////
  const handleResend = async () => {
    try {
      await axios({
        url: `${QUIZZ_URL.AUTH.sendOtp}`,
        method: "POST",
        data: {
          phone: registerData.phone,
        },
      });
      setTimer({ ...timer, sec: 59, min: 1 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Toaster />
      {workingAnimation}
      <div className="h-screen md:py-12 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40 flex items-center justify-center">
        <div className="md:w-1/2">
          <div className="max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0">
            <div className="relative">
              {!isSentOtp ? (
                <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl">
                  <Formik
                    initialValues={{
                      name: "",
                      phone: "",
                      password: "",
                      confirm_password: "",
                    }}
                    validationSchema={RegistrationSchema}
                    onSubmit={(values: RegistrationInitialData) => {
                      handleRegistration(values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="text-center">
                          <h1 className="text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center">
                            Welcome Back
                          </h1>
                        </div>
                        <div className="flex flex-col mt-4 text-center">
                          <span className="text-center text-red-400">
                            {errorMsg}
                          </span>
                        </div>
                        <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
                        <div className="mb-6">
                          <div className="mt-1 mb-4">
                            <Input
                              label="Full Name"
                              placeholder="Enter Full Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              error={errors.name}
                              touched={touched.name}
                              name="name"
                            />
                          </div>
                          <div className="mt-1 mb-4">
                            <Input
                              label="Phone Number"
                              placeholder="Enter Phone Number"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              error={errors.phone}
                              touched={touched.phone}
                              name="phone"
                              type="number"
                            />
                          </div>
                          <div className="mt-1 mb-4">
                            <Input
                              label="Password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              error={errors.password}
                              touched={touched.password}
                              name="password"
                              placeholder="Password"
                              className="mt-1"
                              type={hide ? "password" : "text"}
                              icon={
                                hide ? (
                                  <svg
                                    onClick={handleHideShowPass}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 52 50"
                                    fill="none"
                                  >
                                    <path
                                      d="M3.49755 2.5L48.4975 47.5M20.6083 19.7841C19.3017 21.134 18.4976 22.973 18.4976 25C18.4976 29.1423 21.8555 32.5 25.9975 32.5C28.0538 32.5 29.9168 31.6725 31.2715 30.3325M12.2476 11.6179C7.4993 14.7509 3.88263 19.4599 2.14258 25C5.3282 35.1427 14.804 42.5 25.998 42.5C30.9703 42.5 35.6035 41.0485 39.497 38.546M23.4975 7.62347C24.32 7.54182 25.1543 7.5 25.998 7.5C37.1923 7.5 46.668 14.8573 49.8535 25C49.1518 27.235 48.1443 29.3345 46.8805 31.25"
                                      stroke="black"
                                      strokeOpacity="0.6"
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    onClick={handleHideShowPass}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 61 61"
                                    fill="none"
                                  >
                                    <path
                                      d="M37.9794 30.0859C37.9794 34.2282 34.6217 37.5859 30.4794 37.5859C26.3374 37.5859 22.9795 34.2282 22.9795 30.0859C22.9795 25.9437 26.3374 22.5859 30.4794 22.5859C34.6217 22.5859 37.9794 25.9437 37.9794 30.0859Z"
                                      stroke="black"
                                      strokeOpacity="0.35"
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M30.4808 12.5859C19.2866 12.5859 9.81094 19.9431 6.62524 30.0859C9.81089 40.2287 19.2866 47.5859 30.4808 47.5859C41.6748 47.5859 51.1505 40.2287 54.3363 30.0859C51.1505 19.9432 41.6748 12.5859 30.4808 12.5859Z"
                                      stroke="black"
                                      strokeOpacity="0.35"
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )
                              }
                            />
                          </div>
                          <Input
                            label="Confirm Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirm_password}
                            error={errors.confirm_password}
                            touched={touched.confirm_password}
                            name="confirm_password"
                            placeholder="Confirm Password"
                            className="mt-1"
                            type={confirmHide ? "password" : "text"}
                            icon={
                              confirmHide ? (
                                <svg
                                  onClick={handleHideShowPassConfirm}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="25"
                                  viewBox="0 0 52 50"
                                  fill="none"
                                >
                                  <path
                                    d="M3.49755 2.5L48.4975 47.5M20.6083 19.7841C19.3017 21.134 18.4976 22.973 18.4976 25C18.4976 29.1423 21.8555 32.5 25.9975 32.5C28.0538 32.5 29.9168 31.6725 31.2715 30.3325M12.2476 11.6179C7.4993 14.7509 3.88263 19.4599 2.14258 25C5.3282 35.1427 14.804 42.5 25.998 42.5C30.9703 42.5 35.6035 41.0485 39.497 38.546M23.4975 7.62347C24.32 7.54182 25.1543 7.5 25.998 7.5C37.1923 7.5 46.668 14.8573 49.8535 25C49.1518 27.235 48.1443 29.3345 46.8805 31.25"
                                    stroke="black"
                                    strokeOpacity="0.6"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  onClick={handleHideShowPassConfirm}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="25"
                                  viewBox="0 0 61 61"
                                  fill="none"
                                >
                                  <path
                                    d="M37.9794 30.0859C37.9794 34.2282 34.6217 37.5859 30.4794 37.5859C26.3374 37.5859 22.9795 34.2282 22.9795 30.0859C22.9795 25.9437 26.3374 22.5859 30.4794 22.5859C34.6217 22.5859 37.9794 25.9437 37.9794 30.0859Z"
                                    stroke="black"
                                    strokeOpacity="0.35"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M30.4808 12.5859C19.2866 12.5859 9.81094 19.9431 6.62524 30.0859C9.81089 40.2287 19.2866 47.5859 30.4808 47.5859C41.6748 47.5859 51.1505 40.2287 54.3363 30.0859C51.1505 19.9432 41.6748 12.5859 30.4808 12.5859Z"
                                    stroke="black"
                                    strokeOpacity="0.35"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )
                            }
                          />
                        </div>

                        <div className="grid mt-6">
                          <Button
                            className="w-[100%] flex justify-center mt-6"
                            variant="primary"
                            buttontype="submit"
                          >
                            <svg
                              xmlnsXlink="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                              />
                            </svg>
                            Registration
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <div className="my-2">
                    <div className="flex flex-col items-center justify-center flex-wrap gapx-x-2 gap-y-2 w-full poppins">
                      <span
                        className="text-gray-700 text-sm font-semibold cursor-pointer w-full text-center"
                        onClick={() => {
                          router.push("/auth/login");
                        }}
                      >
                        Already have an account? Login
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl">
                  <Formik
                    initialValues={{
                      otp: "",
                    }}
                    validationSchema={OtpVerifySchema}
                    onSubmit={(values: OtpVerifyInitialData) => {
                      handleOtpVerify(values);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="text-center">
                          <h1 className="text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center">
                            Verify Otp
                          </h1>
                        </div>
                        <div className="flex flex-col mt-4 text-center">
                          <span className="text-center text-red-400">
                            {errorMsg}
                          </span>
                        </div>
                        <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
                        <div className="mb-6">
                          <Input
                            label="OTP"
                            placeholder="Enter otp"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otp}
                            error={errors.otp}
                            touched={touched.otp}
                            name="otp"
                            maxlength={5}
                          />
                          <div
                            onClick={handleResend}
                            className={`mt-1 ${
                              min === 0 && sec === 0
                                ? "cursor-pointer text-primary_bg"
                                : "cursor-not-allowed"
                            }`}
                          >
                            <span>Didn't get? Resend &nbsp;</span>
                            <span>
                              {String(min).padStart(2, "0")}:
                              {String(sec).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        <div className="grid mt-6">
                          <Button
                            className="w-[100%] flex justify-center mt-6"
                            variant="primary"
                            buttontype="submit"
                          >
                            <svg
                              xmlnsXlink="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                              />
                            </svg>
                            Verify
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
