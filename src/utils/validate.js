export const checkValidData = (email, password) => {
  //   const isNameValid = /^[A-Za-z\s]{7,29}$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );

  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password,
    );

  //   if (name === "") return "Please enter a name.";

  //   if (!isNameValid) return "Please enter a valid name.";

  if (email === "") return "Please enter a email ID.";
  if (!isEmailValid) return "Please enter a valid email address.";

  if (password === "") return "Please enter a password.";
  if (!isPasswordValid) return "Password is not valid.";

  //   if (password !== confirmPassword) return "Password did not match.";

  return null;
};
