import { Link } from "react-router-dom";
import LogoText from "../../components/LogoText";
import imgF from "../../assets/imgF.png";
const Header = () => {
  return (
    <header className="flex">
      <img className="mix-blend-darken" src={imgF} alt="Img F" />
      <LogoText />
      <div className="flex text-black text-sm font-light leading-[14.50px] items-center justify-end w-full ">
        Have an account?
        <Link
          className="text-teal-500 mx-2 text-sm font-medium leading-[14.50px]"
          to="/login"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
};
export default Header;
