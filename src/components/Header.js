import { useNavigate } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Redux/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div
      className={
        user
          ? "absolute w-full pl-8 pr-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center"
          : "absolute w-full pl-40 pr-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center"
      }
    >
      <img className="w-48" src={LOGO_IMG} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-9 h-9 mr-1" src={user?.photoURL} alt="user-logo" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
