import { useNavigate } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

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
