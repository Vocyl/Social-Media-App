import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <button
      onClick={handleCancel}
      type="button"
      className="text-teal-500 text-xl font-semibold  bg-white uppercase leading-[14.50px] border-2 border-teal-500 rounded-md py-4 px-16"
    >
      cancel
    </button>
  );
};
export default CancelButton;
