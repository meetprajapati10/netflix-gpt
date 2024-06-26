import { useNavigate } from "react-router-dom";
import { LOGO_IMG, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Redux/userSlice";
import { GoSearch } from "react-icons/go";
import { toggleGptSearchView } from "../Redux/gptSlice";
import { changeLanguage } from "../Redux/configSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, signed up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when Component is UnMount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={
        user
          ? "absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center"
          : "absolute w-full pl-12 md:pl-40 pr-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center"
      }
    >
      <img className="w-44 xl:w-48 mx-auto md:mx-0" src={LOGO_IMG} alt="logo" />
      {user && (
        <div className="flex md:p-2 items-center">
          {showGptSearch && (
            <select
              className="py-1 px-2 md:p-2 bg-gray-700 text-white rounded-md cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <div
            className="text-[26px] text-white py-2 px-4 mx-2 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              <button className="text-[17px] md:text-lg font-medium">
                Home
              </button>
            ) : (
              <GoSearch className="text-[22px] md:text-[25px]" />
            )}
          </div>
          <img
            className="hidden md:block w-9 h-9 mr-1"
            src={user?.photoURL}
            alt="user-logo"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
