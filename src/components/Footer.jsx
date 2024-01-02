import { Link } from "react-router-dom";
import Image from "../assets/images/SpliceOfLife_Logo.png";

const Footer = () => {
  return (
    <footer className=" w-screen px-12 py-12 bg-black bottom-0">
      <div className="flex justify-between">
        <Link className="flex gap-6 items-center" to="/">
          <img className="w-[8rem]" src={Image} alt="Splice Of Life Logo" />
        </Link>
        <h1 className="text-xl text-white">
          We sell the best mutated creatures known to man - Splice Of Life
        </h1>
        <p className="opacity-30">Site by: Xavier | Joel | Travynn | Dane</p>
      </div>
    </footer>
  );
};

export default Footer;
