/**
 * Author: Sanjiv
 * use: For API URLs
 * status: Open
 */

type QuizzUrlKeys =
  | "AUTH"
  | "TEST_URL"
  | "TEST_PAPER_URL"
  | "QUESTIONS_URL"
  | "QUESTION_TYPE_URL";

type Urls = {
  [key in QuizzUrlKeys]: {
    get?: string;
    create?: string;
    update?: string;
    getById?: string;
    delete?: string;
    createUpdateContent?: string;
    register?: string;
    login?: string;
    sendOtp?: string;
    getAll?: string;
    upload?: string;
    updateQuestion?: string;
    updateOption?: string;
  };
};

export const QUIZZ_URL: Urls = {
  AUTH: {
    register : "/auth/register",
    login: "/auth/login",
    sendOtp:"/auth/phone/send-otp"
  },
  TEST_URL:{
    getAll: "test/get-all",
    update: "test/update",
    create: "test/create",
    delete: "test/delete"
  },
  TEST_PAPER_URL:{
    getAll: "test-paper/get-all",
    update: "test-paper/update",
    create: "test-paper/create",
    delete: "test-paper/delete"
  },
  QUESTIONS_URL:{
    getAll: "/question/test-paper",
    updateQuestion: "question/only/update",
    updateOption: "question/option/update",
    create: "question/create-single",
    delete: "question/delete",
    upload: "upload"
  },
  QUESTION_TYPE_URL:{
    getAll: "question-type/get-all",
    update: "question-type/update",
    create: "question-type/create",
    delete: "question-type/delete"
  }
};
