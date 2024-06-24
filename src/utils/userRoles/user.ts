function formatString(inputString: string) {
  return inputString?.replace(/([A-Z])/g, " $1").trim();
}

export const ROLES = Object.freeze({
  ALL: "ALL",
  ADMIN: "ADMIN",
});

class User {
  private user: any;
  constructor(userData: any) {
    this.user = userData;
  }

  getUserId = () => {
    return this.user.id;
  };

  isUserAdmin = () => {
    return this.user?.is_admin;
  };
}

export default User;
