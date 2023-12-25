import ProfileBackground from "@assets/images/ProfileBackground.png";
import ProfilePicture from "@assets/images/ProfilePicture.png";
import { FaPen, FaShareNodes } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate("/profileEdit");
  };
  return (
    <div className="relative flex flex-col w-full h-fit">
      <img src={ProfileBackground} alt="ProfileBackground" />

      <div className="absolute border-0 border-white rounded-md left-10 top-56">
        <img
          className="w-fit h-fit"
          src={ProfilePicture}
          alt="ProfilePicture"
        />
      </div>
      <div className="flex items-center justify-end gap-4 px-4 pt-6 ">
        <button
          className="w-[42px] h-[42px]  flex justify-center items-center rounded-full border border-teal-500"
          onClick={handleEditClick}
        >
          <FaPen />
        </button>
        <button className="w-[42px] h-[42px] flex justify-center items-center rounded-full border border-teal-500">
          <FaShareNodes />
        </button>
      </div>
    </div>
  );
};
export default ProfileHeader;
