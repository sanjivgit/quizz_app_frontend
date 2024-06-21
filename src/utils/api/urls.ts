/**
 * Author: Krish
 * use: For API URLs
 * status: Open
 */

type FinanceUrlKeys =
  | "LEATEST_JOB" 
  | "ADMIT_CARD"
  | "RESULT";

type Urls = {
  [key in FinanceUrlKeys]: {
    get?: string;
    create?: string;
    update?: string;
    getById?: string;
    delete?: string;
    createUpdateContent?: string;
  };
};

export const FINANCE_URL: Urls = {
  LEATEST_JOB: {
    get: "/get-leatest-jobs",
    create: "/create-leatest-job",
    update: "/update-leatest-job",
    getById: "/get-leatest-job",
    createUpdateContent: "/create-leatest-job-update-content"
  },

  ADMIT_CARD: {
    get: "/get-admit-cards",
    create: "/create-admit-card",
    update: "/update-admit-card",
    getById: "/get-admit-card",
    createUpdateContent: "/create-admit-card-update-content"
  },

  RESULT: {
    get: "/get-results",
    create: "/create-result",
    update: "/update-result",
    getById: "/get-result",
    createUpdateContent: "/create-result-update-content"
  },
};
