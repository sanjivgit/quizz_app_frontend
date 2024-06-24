export const isAccessable = (user: any, url: string) => {
  const updatedUrl: string = url.split("/quizz")[1];

  const role: string = user.is_admin
    ? "ADMIN"
    : user?.is_super_admin
    ? "SUPER_ADMIN"
    : "ALL";

  const paths = allUrls.find((i) => i.role === role)?.paths;

  return paths?.some((p) => updatedUrl.includes(p));
};

const allUrls = [
  {
    role: "ADMIN",
    paths: [
      "/admin/home",
      "/admin/all-tests",
      "/admin/question-types",
      "/admin/users",
    ],
  },
  {
    role: "SUPER_ADMIN",
    paths: [""],
  },
  {
    role: "ALL",
    paths: ["/home", "/all-sets", "settings"],
  },
];
