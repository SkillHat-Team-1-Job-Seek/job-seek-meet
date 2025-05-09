export const validateUserDetails = (userDetails: any) => {
  try {
    const { name, email, password } = userDetails;

    if (!name || !email || !password) {
      return "rejected";
    }
    return "accepted";
  } catch (error: any) {
    console.log("Validate User Details:", error.message);
  }
};
