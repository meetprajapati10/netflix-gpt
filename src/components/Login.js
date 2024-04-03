import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMG, USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(
    //   name.current.value,
    //   email.current.value,
    //   password.current.value,
    // );

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
            // "https://lh3.googleusercontent.com/a/ACg8ocIif3SQkcfRAvV0-FFbbTzPJkYn0yuBl9f9afHgYIaI=s360-c-no",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[27%] p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="py-4 mb-2 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500 font-medium"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500 font-medium"
        />
        <input
          ref={password}
          type="password"
          placeholder={isSignInForm ? "Password" : "Create Password"}
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500 font-medium"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500 font-medium"
          />
        )}
        <p className="text-red-500 my-2">{errorMessage}</p>
        <button
          className="bg-red-600 p-2 my-2 w-full rounded-md font-semibold hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="my-4 flex gap-1">
          <p className="text-gray-400 font-medium">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          </p>
          <p
            className="cursor-pointer font-medium hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now." : "Sign In Now."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
