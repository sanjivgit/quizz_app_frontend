function formatString(inputString: string) {
  return inputString?.replace(/([A-Z])/g, ' $1').trim();
}

export const ROLES = Object.freeze({
  BACK_OFFICE: "BACK OFFICE",
    JUNIOR_ENGINEER: "JUNIOR ENGINEER",
    ASSISTANT_ENGINEER: "ASSISTANT ENGINEER",
    EXECUTIVE_ENGINEER: "EXECUTIVE ENGINEER",
    SUPERINTENDENT_ENGINEER: "SUPERINTENDENT ENGINEER",
    CHIEF_ENGINEER: "CHIEF ENGINEER",
    DEPUTY_MUNICIPAL_COMMISSIONER: "DEPUTY MUNICIPAL COMMISSIONER",
    ASSISTANT_MUNICIPAL_COMMISSIONER: "ASSISTANT MUNICIPAL COMMISSIONER",
    MUNICIPAL_COMMISSIONER: "MUNICIPAL COMMISSIONER"
});
  
class User {
  private user: any
  constructor(userData: any) {
    this.user = userData;
  }

  getUserId = () => {
    return this.user.id;
  }

  isUserAdmin = () => {
    return this.user?.is_admin;
  }
}

export default User;
