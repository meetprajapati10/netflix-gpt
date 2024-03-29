import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-[27%] p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="py-4 mb-2 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <button className="bg-red-600 p-2 my-2 w-full rounded-md hover:bg-red-700 font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-4 flex gap-1">
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
