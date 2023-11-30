import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut(); // Invoke the logOut function
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className=" containerWrap flex justify-between">
        <button className="btn btn-ghost text-xl">Truechat</button>
        {currentUser ? (
          <button onClick={handleLogOut} className="btn btn-ghost text-xl">
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
